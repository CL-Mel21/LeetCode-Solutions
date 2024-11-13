/*
medium_01143_Longest_Common_Subsequence
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
*/

// var longestCommonSubsequence = function (text1, text2) {
// 	let n = text1.length, m = text2.length;
// 	let dp = new Array(n + 1).fill(null).map(i => new Array(m + 1).fill(0));

// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < m; j++) {

// 			dp[i + 1][j + 1] = text1[i] === text2[j] ? dp[i][j] + 1 : dp[i][j];
// 			dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]);
// 		}
// 		// console.log(dp)
// 	}

// 	return dp[n][m];
// };



var longestCommonSubsequence = function (text1, text2) {
	let n = text1.length, m = text2.length;
	let dp = new Array(m + 1).fill(0);

	for (let i = 0; i < n; i++) {
		let temp = dp[0];
		for (let j = 0; j < m; j++) {
			if (text1[i] === text2[j]) temp++;
			let newLen = Math.max(dp[j + 1], dp[j], temp);
			temp = dp[j + 1];
			dp[j + 1] = newLen;
		}
		// console.log(dp)
	}

	return dp[m];

};

module.exports = { longestCommonSubsequence };