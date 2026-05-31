---
test: ../concurrent_post_user1_test.md
status: passed
started: 2026-05-30T23:53:24.958Z
duration_s: 398
session_id: fd336f64-974c-4f70-85c4-5abda89a58c4
---

# Concurrent Post — User 1 (Gym) — Result

## Step 1 ✓ passed (20.5s)
md5: a1c337fdb3469e4c67b238ec6e913ab2
Go to http://localhost:3000

## Step 2 ✓ passed (110s)
md5: 27fc8d01958f34c9bfecade5f127dad1
Sign up a fresh user: click "Sign up", then type the email {{email}} into the email field, then type the password grass1234, then type the display name {{displayName}}, then click "Sign up" to submit.

## Step 3 ✓ passed (24.1s)
md5: 2f18bf107a416a2955f0a3eea4e8606f
Open the log dialog by clicking the center Log control in the bottom navigation bar.

## Step 4 ✓ passed (78.8s)
md5: 3e5a8e8db89337bbb215b9e967754b3b
In the open "Log a hangout" dialog: set the photo file input to the local file at .testmuai/tests/fixtures/hangout.jpg, then click the "Gym" activity option (worth 20 points). Do not close or dismiss the dialog.

## Step 5 ✓ passed (65s)
md5: 267406f6ff38a61807268964a8be5135
Click the "Log it" button to submit the hangout. The dialog should close on its own after a successful submit — do not dismiss it by clicking the backdrop.

## Step 6 ✓ passed (83.2s)
md5: 8dabe57cff1fd76995d3f7f2111d6540
On the Home feed, verify that a new feed post appears with an image element that has a non-empty source, and that the post shows "+20 points". Verify no error message or error overlay is shown.
