---
mode: testing
max_steps: 35
target: chrome
variables:
  email:
    value: "kane-concurrent-u3-0@example.com"
  displayName:
    value: "Kane Concurrent Three"
---

# Concurrent Post — User 3 (Hike)

One of three flows designed to run AT THE SAME TIME (see concurrent_post_user1_test.md
and concurrent_post_user2_test.md) to verify that simultaneous hangout posts by
different users do not error, race, or clobber each other. Verifies Requirements 3
and 4 under concurrency. Self-contained: signs up its own fresh user. The email is a
{{email}} variable so every run (including parallel replays) uses a unique address —
pass a fresh value with --variables on each invocation. Photo check is presence, not
content (Req 10.4).

## Step 1
Go to http://localhost:3000

## Step 2
Sign up a fresh user: click "Sign up", then type the email {{email}} into the email field, then type the password grass1234, then type the display name {{displayName}}, then click "Sign up" to submit.

## Step 3
Open the log dialog by clicking the center Log control in the bottom navigation bar.

## Step 4
In the open "Log a hangout" dialog: set the photo file input to the local file at .testmuai/tests/fixtures/hangout3.jpg, then click the "Hike" activity option (worth 50 points). Do not close or dismiss the dialog.

## Step 5
Click the "Log it" button to submit the hangout. The dialog should close on its own after a successful submit — do not dismiss it by clicking the backdrop.

## Step 6
On the Home feed, verify that a new feed post appears with an image element that has a non-empty source, and that the post shows "+50 points". Verify no error message or error overlay is shown.
