// repos.ts — repository interfaces (Phase 0). The only contract the hooks depend on.
// Implemented twice: a Supabase-backed version (production) and an in-memory fake
// (tests / parallel UI work). UI and pure logic never import the Supabase client.
import type { BadgeName } from "../core/badges";
import type { Hangout, HangoutWithPoster, NewHangout, Profile } from "./types";

export interface AuthUser {
  id: string;
  email: string;
}

export interface AuthSession {
  user: AuthUser;
}

export type Unsubscribe = () => void;

export interface ProfileRepo {
  create(userId: string, displayName: string): Promise<Profile>; // 1.3
  getById(userId: string): Promise<Profile | null>;
  list(): Promise<Profile[]>; // leaderboard source (5.1)
  update(userId: string, patch: Partial<Profile>): Promise<Profile>; // score/streak
}

export interface HangoutRepo {
  create(input: NewHangout): Promise<Hangout>; // 3.7
  delete(hangoutId: string): Promise<void>; // rollback (10.5)
  listFeed(): Promise<HangoutWithPoster[]>; // 4.1, newest first
  listByUser(userId: string): Promise<Hangout[]>; // 6.3
  countByUser(userId: string): Promise<number>; // badge thresholds (6.4-6.6)
}

export interface CheerRepo {
  add(hangoutId: string, userId: string): Promise<void>; // 4.5
  countFor(hangoutId: string): Promise<number>; // 4.4
  hasCheered(hangoutId: string, userId: string): Promise<boolean>;
}

export interface CommentRepo {
  add(hangoutId: string, userId: string, body: string): Promise<void>;
  countFor(hangoutId: string): Promise<number>; // 4.4
}

export interface BadgeRepo {
  listByUser(userId: string): Promise<BadgeName[]>; // 6.2
  unlock(userId: string, badge: BadgeName): Promise<void>; // 6.4-6.7
}

export interface PhotoStorageRepo {
  upload(file: File, userId: string): Promise<string>; // 3.6 returns non-empty URL
}

export interface AuthRepo {
  signUp(email: string, password: string): Promise<AuthUser>; // 1.2
  signIn(email: string, password: string): Promise<AuthUser>; // 2.1
  signOut(): Promise<void>; // 2.6
  getSession(): Promise<AuthSession | null>; // 2.7, 2.8
  onAuthStateChange(cb: (s: AuthSession | null) => void): Unsubscribe;
}

// The set of repositories the application hooks consume. A single object lets us
// swap the Supabase implementation for the in-memory fake at the composition root.
export interface Repositories {
  auth: AuthRepo;
  profiles: ProfileRepo;
  hangouts: HangoutRepo;
  cheers: CheerRepo;
  comments: CommentRepo;
  badges: BadgeRepo;
  photos: PhotoStorageRepo;
}

// Domain-level errors the repositories raise so hooks can show the right copy.
export class DuplicateEmailError extends Error {
  constructor() {
    super("That email is already registered");
    this.name = "DuplicateEmailError";
  }
}

export class InvalidCredentialsError extends Error {
  constructor() {
    super("Email or password is incorrect");
    this.name = "InvalidCredentialsError";
  }
}

export class UploadFailedError extends Error {
  constructor() {
    super("Photo upload failed");
    this.name = "UploadFailedError";
  }
}
