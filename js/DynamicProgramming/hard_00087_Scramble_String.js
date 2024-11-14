var isScramble = function (s1, s2) {
	if (s1 === s2) return true;
	if (s1.length !== s2.length || s1.length === 1 || !isSameLetters(s1, s2)) return false;
	const map = {};

	const helper = (s1, s2) => {
		// console.log({ s1, s2 })
		if (s1 === s2 || map[`${s1},${s2}`]) return true;
		if (s1.length === 1 || map[`${s1},${s2}`] === false) return false;

		for (let i = 1; i < s1.length; i++) {
			let s11 = s1.substring(0, i), s12 = s1.substring(i);
			let s21 = s2.substring(0, s2.length - i), s22 = s2.substring(s2.length - i);
			let s23 = s2.substring(0, i), s24 = s2.substring(i);
			if (isSameLetters(s11, s22)) {
				if (helper(s11, s22)) {
					map[`${s11},${s22}`] = true;
					if (helper(s12, s21)) {
						map[`${s12},${s21}`] = true;
						return true;
					} else {
						map[`${s12},${s21}`] = false;
					}
				} else {
					map[`${s11},${s22}`] = false;
				}

			} else {
				map[`${s11},${s22}`] = false;
				map[`${s12},${s21}`] = false;
			}


			if (isSameLetters(s11, s23)) {
				if (helper(s11, s23)) {
					map[`${s11},${s23}`] = true;
					if (helper(s12, s24)) {
						map[`${s12},${s24}`] = true;
						return true;
					} else {
						map[`${s12},${s24}`] = false;
					}
				} else {
					map[`${s11},${s23}`] = false;
				}

			} else {
				map[`${s11},${s23}`] = false;
				map[`${s12},${s24}`] = false;
			}
		}
		return false;
	};
	return helper(s1, s2);
};

const isSameLetters = (s1, s2) => {
	let map = {};
	for (let l of s1) {
		map[l] = (map[l] || 0) + 1;
	}
	for (let l of s2) {
		if (!map[l]) return false;
		map[l]--;
		if (map[l] < 0) return false;
	}
	return true;
};

module.exports = { isScramble };