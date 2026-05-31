---
test: ../concurrent_post_user2_test.md
status: passed
started: 2026-05-31T00:07:49.144Z
duration_s: 423
session_id: 9f3dbd06-80a4-42d1-806a-8355a4219947
---

# Concurrent Post — User 2 (Dinner) — Result

## Step 1 ✓ passed (20s)
md5: a1c337fdb3469e4c67b238ec6e913ab2
Go to http://localhost:3000

## Step 2 ✓ passed (79.8s)
md5: 27fc8d01958f34c9bfecade5f127dad1
Sign up a fresh user: click "Sign up", then type the email {{email}} into the email field, then type the password grass1234, then type the display name {{displayName}}, then click "Sign up" to submit.

## Step 3 ✓ passed (23.6s)
md5: 2f18bf107a416a2955f0a3eea4e8606f
Open the log dialog by clicking the center Log control in the bottom navigation bar.

## Step 4 ✓ passed (113.9s)
md5: a6d53d2072b139eab51edb620245dbd4
In the open "Log a hangout" dialog: set the photo file input to the local file at .testmuai/tests/fixtures/hangout2.jpg, then click the "Dinner" activity option (worth 30 points). Do not close or dismiss the dialog.

## Step 5 ✓ passed (74.7s)
md5: 267406f6ff38a61807268964a8be5135
Click the "Log it" button to submit the hangout. The dialog should close on its own after a successful submit — do not dismiss it by clicking the backdrop.

## Step 6 ✓ passed (97.6s)
md5: fd3bd709c487955f2db776d672108bea
On the Home feed, verify that a new feed post appears with an image element that has a non-empty source, and that the post shows "+30 points". Verify no error message or error overlay is shown.
