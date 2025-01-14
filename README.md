# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue encountered when using Firebase's `onAuthStateChanged` listener: memory leaks and unexpected behavior if the listener isn't properly unsubscribed from when a component unmounts in a React application.

The `bug.js` file showcases the problematic code. The `bugSolution.js` demonstrates the corrected approach using `useEffect`'s cleanup function to handle unsubscription effectively. This ensures no memory leaks and the application behaves as expected.

## Problem

Failing to unsubscribe from `onAuthStateChanged` can lead to:

- **Memory leaks:** The listener continues to run even after the component is unmounted, consuming unnecessary resources.
- **Unexpected behavior:** The listener might still trigger callbacks, leading to unexpected state updates or other issues. 

## Solution

The solution utilizes the `useEffect` hook in React to manage the subscription lifecycle. The cleanup function within `useEffect` is crucial to unsubscribe when the component unmounts, resolving the memory leak and ensuring predictable behavior.