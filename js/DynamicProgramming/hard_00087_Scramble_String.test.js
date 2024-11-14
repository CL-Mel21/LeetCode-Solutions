const { isScramble } = require("./hard_00087_Scramble_String");

it("", () => {
	expect(isScramble("eebaacbcbcadaaedceaaacadccd", "eadcaacabaddaceacbceaabeccd")).toBe(false);
	expect(isScramble("ijklwvxzylfpljngbzvdsbqzmlczrr", "rrcznjlbgzbsqdvzmljiklvwzxlfyp")).toBe(true);
	expect(isScramble("ctmiyrlyggdwmwoyamryyuzorttykp", "orttpkyuzygmtcrlyiarmyygmwdwoy")).toBe(true);
	expect(isScramble("dbjjhoknzsjcwlajfabdflxzvcvxdc", "ljafaxlfdbcvzvxwcjsoknzhjdjbdc")).toBe(true);
	expect(isScramble("elxvpfmgoxnufzaeyknbmnttgepnow", "yknbegpnowttmnugonxzfealmpfvxe")).toBe(true);
	expect(isScramble("moaqxumpiduthloatwiegkxmeqzqaf", "futhloatweizaqmeqgkxqxaomumpid")).toBe(true);
	expect(isScramble("ncjbcrgdjspajyhiwqfkadbdvasmvy", "hiwqfkamdbdsavvyyjapsjdgrccnjb")).toBe(true);
});