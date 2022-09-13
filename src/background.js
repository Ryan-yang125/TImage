// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  console.log('This Default background color set to %cgreen', `color: ${color}`);
});