const { longestCommonSubsequence } = require("./medium_01143_Longest_Common_Subsequence");

it("", () => {
	expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
	expect(longestCommonSubsequence("abc", "abc")).toBe(3);
	expect(longestCommonSubsequence("abc", "def")).toBe(0);
	expect(longestCommonSubsequence(
		"dgshfgfgegdscdhsjvcdsghvcghdasvfchgdasvchadsvcghdsvcghdsvcghdasvchgasvchasvchjasvchjasv", 
		"asdbhjwsfhjawgbfcjsadbckjsdbcvhjdsavjhdsjcvdsjhcdvajhsbvdjhsavcjhdsvfcjhdsvchjsvchjsavchjsvchvascvdjsfvjhdsvhdajsvchjashv"
	)).toBe(61);
});