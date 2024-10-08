"use strict";
//https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt

const Plane = ["BMP", "SMP", "SIP", "TIP", null, null, null, null, null, null, null, null, null, null, "SSP", "SPUA-A", "SPUA-B"];
const planeNames = [
	"Basic Multilingual Plane",
	"Supplementary Multilingual Plane",
	"Supplementary Ideographic Plane",
	"Tertiary Ideographic Plane",
	"unassigned",
	"unassigned",
	"unassigned",
	"unassigned",
	"unassigned",
	"unassigned",
	"unassigned",
	"unassigned",
	"unassigned",
	"unassigned",
	"Supplementary Special-purpose Plane",
	"Supplementary Private Use Area-A",
	"Supplementary Private Use Area-B"
];

//https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt
const GeneralCategory = {
	L: [/\p{gc=L}/u, { Lu: /\p{gc=Lu}/u, Ll: /\p{gc=Ll}/u, Lt: /\p{gc=Lt}/u, Lm: /\p{gc=Lm}/u, Lo: /\p{gc=Lo}/u }],
	M: [/\p{gc=M}/u, { Mn: /\p{gc=Mn}/u, Mc: /\p{gc=Mc}/u, Me: /\p{gc=Me}/u }],
	N: [/\p{gc=N}/u, { Nd: /\p{gc=Nd}/u, Nl: /\p{gc=Nl}/u, No: /\p{gc=No}/u }],
	S: [/\p{gc=S}/u, { Sm: /\p{gc=Sm}/u, Sc: /\p{gc=Sc}/u, Sk: /\p{gc=Sk}/u, So: /\p{gc=So}/u }],
	P: [/\p{gc=P}/u, { Pc: /\p{gc=Pc}/u, Pd: /\p{gc=Pd}/u, Ps: /\p{gc=Ps}/u, Pe: /\p{gc=Pe}/u, Pi: /\p{gc=Pi}/u, Pf: /\p{gc=Pf}/u, Po: /\p{gc=Po}/u }],
	Z: [/\p{gc=Z}/u, { Zs: /\p{gc=Zs}/u, Zl: /\p{gc=Zl}/u, Zp: /\p{gc=Zp}/u }],
	C: [/\p{gc=C}/u, { Cc: /\p{gc=Cc}/u, Cf: /\p{gc=Cf}/u, Cs: /\p{gc=Cs}/u, Co: /\p{gc=Co}/u, Cn: /\p{gc=Cn}/u }],
};
const generalCategoryNames = {
	L: "Letter",
	//LC: "Cased_Letter",
	Lu: "Uppercase Letter",
	Ll: "Lowercase Letter",
	Lt: "Titlecase Letter",
	Lm: "Modifier Letter",
	Lo: "Other Letter",
	M: "Mark",
	Mn: "Non-Spacing Mark",
	Mc: "Spacing Combining Mark",
	Me: "Enclosing Mark",
	N: "Number",
	Nd: "Decimal Digit Number",
	Nl: "Letter Number",
	No: "Other Number",
	S: "Symbol",
	Sm: "Math Symbol",
	Sc: "Currency Symbol",
	Sk: "Modifier Symbol",
	So: "Other Symbol",
	P: "Punctuation",
	Pc: "Connector Punctuation",
	Pd: "Dash Punctuation",
	Ps: "Open Punctuation",
	Pe: "Close Punctuation",
	Pi: "Initial Punctuation",
	Pf: "Final Punctuation",
	Po: "Other Punctuation",
	Z: "Separator",
	Zs: "Space Separator",
	Zl: "Line Separator",
	Zp: "Paragraph Separator",
	C: "Other",
	Cc: "Control",
	Cf: "Format",
	Cs: "Surrogate",
	Co: "Private Use",
	Cn: "Unassigned"
};

const canonicalCombiningClassNames = {
	0: "Not_Reordered",
	1: "Overlay",
	6: "Han_Reading",
	7: "Nukta",
	8: "Kana_Voicing",
	9: "Virama",
	10: "CCC10",
	11: "CCC11",
	12: "CCC12",
	13: "CCC13",
	14: "CCC14",
	15: "CCC15",
	16: "CCC16",
	17: "CCC17",
	18: "CCC18",
	19: "CCC19",
	20: "CCC20",
	21: "CCC21",
	22: "CCC22",
	23: "CCC23",
	24: "CCC24",
	25: "CCC25",
	26: "CCC26",
	27: "CCC27",
	28: "CCC28",
	29: "CCC29",
	30: "CCC30",
	31: "CCC31",
	32: "CCC32",
	33: "CCC33",
	34: "CCC34",
	35: "CCC35",
	36: "CCC36",
	84: "CCC84",
	91: "CCC91",
	103: "CCC103",
	107: "CCC107",
	118: "CCC118",
	122: "CCC122",
	129: "CCC129",
	130: "CCC130",
	132: "CCC132",
	133: "CCC133",
	200: "Attached_Below_Left",
	202: "Attached_Below",
	214: "Attached_Above",
	216: "Attached_Above_Right",
	218: "Below_Left",
	220: "Below",
	222: "Below_Right",
	224: "Left",
	226: "Right",
	228: "Above_Left",
	230: "Above",
	232: "Above_Right",
	233: "Double_Below",
	234: "Double_Above",
	240: "Iota_Subscript"
};

//https://www.unicode.org/Public/UCD/latest/ucd/Scripts.txt
const Script = {
	Common: /\p{sc=Common}/u,
	Inherited: /\p{sc=Inherited}/u,

	Adlam: null,
	Ahom: null,
	Anatolian_Hieroglyphs: null,
	Arabic: null,
	Armenian: null,
	Avestan: null,
	Balinese: null,
	Bamum: null,
	Bassa_Vah: null,
	Batak: null,
	Bengali: null,
	Bhaiksuki: null,
	Bopomofo: null,
	Brahmi: null,
	Braille: null,
	Buginese: null,
	Buhid: null,
	Canadian_Aboriginal: null,
	Carian: null,
	Caucasian_Albanian: null,
	Coptic: null,
	Cuneiform: null,
	Cypriot: null,
	Cypro_Minoan: null,
	Cyrillic: null,
	Deseret: null,
	Devanagari: null,
	Dives_Akuru: null,
	Dogra: null,
	Duployan: null,
	Egyptian_Hieroglyphs: null,
	Elbasan: null,
	Elymaic: null,
	Ethiopic: null,
	Garay: null,
	Georgian: null,
	Glagolitic: null,
	Gothic: null,
	Grantha: null,
	Greek: null,
	Gujarati: null,
	Gunjala_Gondi: null,
	Gurmukhi: null,
	Gurung_Khema: null,
	Han: null,
	Hangul: null,
	Hanifi_Rohingya: null,
	Hanunoo: null,
	Hatran: null,
	Hebrew: null,
	Hiragana: null,
	Chakma: null,
	Cham: null,
	Cherokee: null,
	Chorasmian: null,
	Imperial_Aramaic: null,
	Inscriptional_Pahlavi: null,
	Inscriptional_Parthian: null,
	Javanese: null,
	Kaithi: null,
	Kannada: null,
	Katakana: null,
	Kawi: null,
	Kayah_Li: null,
	Kharoshthi: null,
	Khitan_Small_Script: null,
	Khmer: null,
	Khojki: null,
	Khudawadi: null,
	Kirat_Rai: null,
	Lao: null,
	Latin: null,
	Lepcha: null,
	Limbu: null,
	Linear_A: null,
	Linear_B: null,
	Lisu: null,
	Lycian: null,
	Lydian: null,
	Mahajani: null,
	Makasar: null,
	Malayalam: null,
	Mandaic: null,
	Manichaean: null,
	Marchen: null,
	Masaram_Gondi: null,
	Medefaidrin: null,
	Meetei_Mayek: null,
	Mende_Kikakui: null,
	Meroitic_Cursive: null,
	Meroitic_Hieroglyphs: null,
	Miao: null,
	Modi: null,
	Mongolian: null,
	Mro: null,
	Multani: null,
	Myanmar: null,
	Nabataean: null,
	Nag_Mundari: null,
	Nandinagari: null,
	New_Tai_Lue: null,
	Newa: null,
	Nko: null,
	Nushu: null,
	Nyiakeng_Puachue_Hmong: null,
	Ogham: null,
	Ol_Chiki: null,
	Ol_Onal: null,
	Old_Hungarian: null,
	Old_Italic: null,
	Old_North_Arabian: null,
	Old_Permic: null,
	Old_Persian: null,
	Old_Sogdian: null,
	Old_South_Arabian: null,
	Old_Turkic: null,
	Old_Uyghur: null,
	Oriya: null,
	Osage: null,
	Osmanya: null,
	Pahawh_Hmong: null,
	Palmyrene: null,
	Pau_Cin_Hau: null,
	Phags_Pa: null,
	Phoenician: null,
	Psalter_Pahlavi: null,
	Rejang: null,
	Runic: null,
	Samaritan: null,
	Saurashtra: null,
	Sharada: null,
	Shavian: null,
	Siddham: null,
	SignWriting: null,
	Sinhala: null,
	Sogdian: null,
	Sora_Sompeng: null,
	Soyombo: null,
	Sundanese: null,
	Sunuwar: null,
	Syloti_Nagri: null,
	Syriac: null,
	Tagalog: null,
	Tagbanwa: null,
	Tai_Le: null,
	Tai_Tham: null,
	Tai_Viet: null,
	Takri: null,
	Tamil: null,
	Tangsa: null,
	Tangut: null,
	Telugu: null,
	Thaana: null,
	Thai: null,
	Tibetan: null,
	Tifinagh: null,
	Tirhuta: null,
	Todhri: null,
	Toto: null,
	Tulu_Tigalari: null,
	Ugaritic: null,
	Vai: null,
	Vithkuqi: null,
	Wancho: null,
	Warang_Citi: null,
	Yezidi: null,
	Yi: null,
	Zanabazar_Square: null
};

for(const scpt in Script) {
	if(Script[scpt]) continue;
	try {
		Script[scpt] = new RegExp("\\p{sc=" + scpt + "}", "u");
	} catch {
		console.debug("Unsupported script", scpt);
		delete Script[scpt];
	}
};

//https://www.unicode.org/Public/UCD/latest/ucd/Blocks.txt
const Block = [
	[0x000, 0x007, "Basic Latin"],
	[0x008, 0x00F, "Latin-1 Supplement"],
	[0x010, 0x017, "Latin Extended-A"],
	[0x018, 0x024, "Latin Extended-B"],
	[0x025, 0x02A, "IPA Extensions"],
	[0x02B, 0x02F, "Spacing Modifier Letters"],
	[0x030, 0x036, "Combining Diacritical Marks"],
	[0x037, 0x03F, "Greek and Coptic"],
	[0x040, 0x04F, "Cyrillic"],
	[0x050, 0x052, "Cyrillic Supplement"],
	[0x053, 0x058, "Armenian"],
	[0x059, 0x05F, "Hebrew"],
	[0x060, 0x06F, "Arabic"],
	[0x070, 0x074, "Syriac"],
	[0x075, 0x077, "Arabic Supplement"],
	[0x078, 0x07B, "Thaana"],
	[0x07C, 0x07F, "NKo"],
	[0x080, 0x083, "Samaritan"],
	[0x084, 0x085, "Mandaic"],
	[0x086, 0x086, "Syriac Supplement"],
	[0x087, 0x089, "Arabic Extended-B"],
	[0x08A, 0x08F, "Arabic Extended-A"],
	[0x090, 0x097, "Devanagari"],
	[0x098, 0x09F, "Bengali"],
	[0x0A0, 0x0A7, "Gurmukhi"],
	[0x0A8, 0x0AF, "Gujarati"],
	[0x0B0, 0x0B7, "Oriya"],
	[0x0B8, 0x0BF, "Tamil"],
	[0x0C0, 0x0C7, "Telugu"],
	[0x0C8, 0x0CF, "Kannada"],
	[0x0D0, 0x0D7, "Malayalam"],
	[0x0D8, 0x0DF, "Sinhala"],
	[0x0E0, 0x0E7, "Thai"],
	[0x0E8, 0x0EF, "Lao"],
	[0x0F0, 0x0FF, "Tibetan"],
	[0x100, 0x109, "Myanmar"],
	[0x10A, 0x10F, "Georgian"],
	[0x110, 0x11F, "Hangul Jamo"],
	[0x120, 0x137, "Ethiopic"],
	[0x138, 0x139, "Ethiopic Supplement"],
	[0x13A, 0x13F, "Cherokee"],
	[0x140, 0x167, "Unified Canadian Aboriginal Syllabics"],
	[0x168, 0x169, "Ogham"],
	[0x16A, 0x16F, "Runic"],
	[0x170, 0x171, "Tagalog"],
	[0x172, 0x173, "Hanunoo"],
	[0x174, 0x175, "Buhid"],
	[0x176, 0x177, "Tagbanwa"],
	[0x178, 0x17F, "Khmer"],
	[0x180, 0x18A, "Mongolian"],
	[0x18B, 0x18F, "Unified Canadian Aboriginal Syllabics Extended"],
	[0x190, 0x194, "Limbu"],
	[0x195, 0x197, "Tai Le"],
	[0x198, 0x19D, "New Tai Lue"],
	[0x19E, 0x19F, "Khmer Symbols"],
	[0x1A0, 0x1A1, "Buginese"],
	[0x1A2, 0x1AA, "Tai Tham"],
	[0x1AB, 0x1AF, "Combining Diacritical Marks Extended"],
	[0x1B0, 0x1B7, "Balinese"],
	[0x1B8, 0x1BB, "Sundanese"],
	[0x1BC, 0x1BF, "Batak"],
	[0x1C0, 0x1C4, "Lepcha"],
	[0x1C5, 0x1C7, "Ol Chiki"],
	[0x1C8, 0x1C8, "Cyrillic Extended-C"],
	[0x1C9, 0x1CB, "Georgian Extended"],
	[0x1CC, 0x1CC, "Sundanese Supplement"],
	[0x1CD, 0x1CF, "Vedic Extensions"],
	[0x1D0, 0x1D7, "Phonetic Extensions"],
	[0x1D8, 0x1DB, "Phonetic Extensions Supplement"],
	[0x1DC, 0x1DF, "Combining Diacritical Marks Supplement"],
	[0x1E0, 0x1EF, "Latin Extended Additional"],
	[0x1F0, 0x1FF, "Greek Extended"],
	[0x200, 0x206, "General Punctuation"],
	[0x207, 0x209, "Superscripts and Subscripts"],
	[0x20A, 0x20C, "Currency Symbols"],
	[0x20D, 0x20F, "Combining Diacritical Marks for Symbols"],
	[0x210, 0x214, "Letterlike Symbols"],
	[0x215, 0x218, "Number Forms"],
	[0x219, 0x21F, "Arrows"],
	[0x220, 0x22F, "Mathematical Operators"],
	[0x230, 0x23F, "Miscellaneous Technical"],
	[0x240, 0x243, "Control Pictures"],
	[0x244, 0x245, "Optical Character Recognition"],
	[0x246, 0x24F, "Enclosed Alphanumerics"],
	[0x250, 0x257, "Box Drawing"],
	[0x258, 0x259, "Block Elements"],
	[0x25A, 0x25F, "Geometric Shapes"],
	[0x260, 0x26F, "Miscellaneous Symbols"],
	[0x270, 0x27B, "Dingbats"],
	[0x27C, 0x27E, "Miscellaneous Mathematical Symbols-A"],
	[0x27F, 0x27F, "Supplemental Arrows-A"],
	[0x280, 0x28F, "Braille Patterns"],
	[0x290, 0x297, "Supplemental Arrows-B"],
	[0x298, 0x29F, "Miscellaneous Mathematical Symbols-B"],
	[0x2A0, 0x2AF, "Supplemental Mathematical Operators"],
	[0x2B0, 0x2BF, "Miscellaneous Symbols and Arrows"],
	[0x2C0, 0x2C5, "Glagolitic"],
	[0x2C6, 0x2C7, "Latin Extended-C"],
	[0x2C8, 0x2CF, "Coptic"],
	[0x2D0, 0x2D2, "Georgian Supplement"],
	[0x2D3, 0x2D7, "Tifinagh"],
	[0x2D8, 0x2DD, "Ethiopic Extended"],
	[0x2DE, 0x2DF, "Cyrillic Extended-A"],
	[0x2E0, 0x2E7, "Supplemental Punctuation"],
	[0x2E8, 0x2EF, "CJK Radicals Supplement"],
	[0x2F0, 0x2FD, "Kangxi Radicals"],
	[0x2FF, 0x2FF, "Ideographic Description Characters"],
	[0x300, 0x303, "CJK Symbols and Punctuation"],
	[0x304, 0x309, "Hiragana"],
	[0x30A, 0x30F, "Katakana"],
	[0x310, 0x312, "Bopomofo"],
	[0x313, 0x318, "Hangul Compatibility Jamo"],
	[0x319, 0x319, "Kanbun"],
	[0x31A, 0x31B, "Bopomofo Extended"],
	[0x31C, 0x31E, "CJK Strokes"],
	[0x31F, 0x31F, "Katakana Phonetic Extensions"],
	[0x320, 0x32F, "Enclosed CJK Letters and Months"],
	[0x330, 0x33F, "CJK Compatibility"],
	[0x340, 0x4DB, "CJK Unified Ideographs Extension A"],
	[0x4DC, 0x4DF, "Yijing Hexagram Symbols"],
	[0x4E0, 0x9FF, "CJK Unified Ideographs"],
	[0xA00, 0xA48, "Yi Syllables"],
	[0xA49, 0xA4C, "Yi Radicals"],
	[0xA4D, 0xA4F, "Lisu"],
	[0xA50, 0xA63, "Vai"],
	[0xA64, 0xA69, "Cyrillic Extended-B"],
	[0xA6A, 0xA6F, "Bamum"],
	[0xA70, 0xA71, "Modifier Tone Letters"],
	[0xA72, 0xA7F, "Latin Extended-D"],
	[0xA80, 0xA82, "Syloti Nagri"],
	[0xA83, 0xA83, "Common Indic Number Forms"],
	[0xA84, 0xA87, "Phags-pa"],
	[0xA88, 0xA8D, "Saurashtra"],
	[0xA8E, 0xA8F, "Devanagari Extended"],
	[0xA90, 0xA92, "Kayah Li"],
	[0xA93, 0xA95, "Rejang"],
	[0xA96, 0xA97, "Hangul Jamo Extended-A"],
	[0xA98, 0xA9D, "Javanese"],
	[0xA9E, 0xA9F, "Myanmar Extended-B"],
	[0xAA0, 0xAA5, "Cham"],
	[0xAA6, 0xAA7, "Myanmar Extended-A"],
	[0xAA8, 0xAAD, "Tai Viet"],
	[0xAAE, 0xAAF, "Meetei Mayek Extensions"],
	[0xAB0, 0xAB2, "Ethiopic Extended-A"],
	[0xAB3, 0xAB6, "Latin Extended-E"],
	[0xAB7, 0xABB, "Cherokee Supplement"],
	[0xABC, 0xABF, "Meetei Mayek"],
	[0xAC0, 0xD7A, "Hangul Syllables"],
	[0xD7B, 0xD7F, "Hangul Jamo Extended-B"],

	[0xD80, 0xDB7, "{High Surrogates}"],
	[0xDB8, 0xDBF, "{High Private Use Surrogates}"],
	[0xDC0, 0xDFF, "{Low Surrogates}"],
	[0xE00, 0xF8F, "{Private Use Area}"],

	[0xF90, 0xFAF, "CJK Compatibility Ideographs"],
	[0xFB0, 0xFB4, "Alphabetic Presentation Forms"],
	[0xFB5, 0xFDF, "Arabic Presentation Forms-A"],
	[0xFE0, 0xFE0, "Variation Selectors"],
	[0xFE1, 0xFE1, "Vertical Forms"],
	[0xFE2, 0xFE2, "Combining Half Marks"],
	[0xFE3, 0xFE4, "CJK Compatibility Forms"],
	[0xFE5, 0xFE6, "Small Form Variants"],
	[0xFE7, 0xFEF, "Arabic Presentation Forms-B"],
	[0xFF0, 0xFFE, "Halfwidth and Fullwidth Forms"],
	[0xFFF, 0xFFF, "Specials"],
	[0x1000, 0x1007, "Linear B Syllabary"],
	[0x1008, 0x100F, "Linear B Ideograms"],
	[0x1010, 0x1013, "Aegean Numbers"],
	[0x1014, 0x1018, "Ancient Greek Numbers"],
	[0x1019, 0x101C, "Ancient Symbols"],
	[0x101D, 0x101F, "Phaistos Disc"],
	[0x1028, 0x1029, "Lycian"],
	[0x102A, 0x102D, "Carian"],
	[0x102E, 0x102F, "Coptic Epact Numbers"],
	[0x1030, 0x1032, "Old Italic"],
	[0x1033, 0x1034, "Gothic"],
	[0x1035, 0x1037, "Old Permic"],
	[0x1038, 0x1039, "Ugaritic"],
	[0x103A, 0x103D, "Old Persian"],
	[0x1040, 0x1044, "Deseret"],
	[0x1045, 0x1047, "Shavian"],
	[0x1048, 0x104A, "Osmanya"],
	[0x104B, 0x104F, "Osage"],
	[0x1050, 0x1052, "Elbasan"],
	[0x1053, 0x1056, "Caucasian Albanian"],
	[0x1057, 0x105B, "Vithkuqi"],
	[0x105C, 0x105F, "Todhri"],
	[0x1060, 0x1077, "Linear A"],
	[0x1078, 0x107B, "Latin Extended-F"],
	[0x1080, 0x1083, "Cypriot Syllabary"],
	[0x1084, 0x1085, "Imperial Aramaic"],
	[0x1086, 0x1087, "Palmyrene"],
	[0x1088, 0x108A, "Nabataean"],
	[0x108E, 0x108F, "Hatran"],
	[0x1090, 0x1091, "Phoenician"],
	[0x1092, 0x1093, "Lydian"],
	[0x1098, 0x1099, "Meroitic Hieroglyphs"],
	[0x109A, 0x109F, "Meroitic Cursive"],
	[0x10A0, 0x10A5, "Kharoshthi"],
	[0x10A6, 0x10A7, "Old South Arabian"],
	[0x10A8, 0x10A9, "Old North Arabian"],
	[0x10AC, 0x10AF, "Manichaean"],
	[0x10B0, 0x10B3, "Avestan"],
	[0x10B4, 0x10B5, "Inscriptional Parthian"],
	[0x10B6, 0x10B7, "Inscriptional Pahlavi"],
	[0x10B8, 0x10BA, "Psalter Pahlavi"],
	[0x10C0, 0x10C4, "Old Turkic"],
	[0x10C8, 0x10CF, "Old Hungarian"],
	[0x10D0, 0x10D3, "Hanifi Rohingya"],
	[0x10D4, 0x10D8, "Garay"],
	[0x10E6, 0x10E7, "Rumi Numeral Symbols"],
	[0x10E8, 0x10EB, "Yezidi"],
	[0x10EC, 0x10EF, "Arabic Extended-C"],
	[0x10F0, 0x10F2, "Old Sogdian"],
	[0x10F3, 0x10F6, "Sogdian"],
	[0x10F7, 0x10FA, "Old Uyghur"],
	[0x10FB, 0x10FD, "Chorasmian"],
	[0x10FE, 0x10FF, "Elymaic"],
	[0x1100, 0x1107, "Brahmi"],
	[0x1108, 0x110C, "Kaithi"],
	[0x110D, 0x110F, "Sora Sompeng"],
	[0x1110, 0x1114, "Chakma"],
	[0x1115, 0x1117, "Mahajani"],
	[0x1118, 0x111D, "Sharada"],
	[0x111E, 0x111F, "Sinhala Archaic Numbers"],
	[0x1120, 0x1124, "Khojki"],
	[0x1128, 0x112A, "Multani"],
	[0x112B, 0x112F, "Khudawadi"],
	[0x1130, 0x1137, "Grantha"],
	[0x1138, 0x113F, "Tulu-Tigalari"],
	[0x1140, 0x1147, "Newa"],
	[0x1148, 0x114D, "Tirhuta"],
	[0x1158, 0x115F, "Siddham"],
	[0x1160, 0x1165, "Modi"],
	[0x1166, 0x1167, "Mongolian Supplement"],
	[0x1168, 0x116C, "Takri"],
	[0x116D, 0x116F, "Myanmar Extended-C"],
	[0x1170, 0x1174, "Ahom"],
	[0x1180, 0x1184, "Dogra"],
	[0x118A, 0x118F, "Warang Citi"],
	[0x1190, 0x1195, "Dives Akuru"],
	[0x119A, 0x119F, "Nandinagari"],
	[0x11A0, 0x11A4, "Zanabazar Square"],
	[0x11A5, 0x11AA, "Soyombo"],
	[0x11AB, 0x11AB, "Unified Canadian Aboriginal Syllabics Extended-A"],
	[0x11AC, 0x11AF, "Pau Cin Hau"],
	[0x11B0, 0x11B5, "Devanagari Extended-A"],
	[0x11BC, 0x11BF, "Sunuwar"],
	[0x11C0, 0x11C6, "Bhaiksuki"],
	[0x11C7, 0x11CB, "Marchen"],
	[0x11D0, 0x11D5, "Masaram Gondi"],
	[0x11D6, 0x11DA, "Gunjala Gondi"],
	[0x11EE, 0x11EF, "Makasar"],
	[0x11F0, 0x11F5, "Kawi"],
	[0x11FB, 0x11FB, "Lisu Supplement"],
	[0x11FC, 0x11FF, "Tamil Supplement"],
	[0x1200, 0x123F, "Cuneiform"],
	[0x1240, 0x1247, "Cuneiform Numbers and Punctuation"],
	[0x1248, 0x1254, "Early Dynastic Cuneiform"],
	[0x12F9, 0x12FF, "Cypro-Minoan"],
	[0x1300, 0x1342, "Egyptian Hieroglyphs"],
	[0x1343, 0x1345, "Egyptian Hieroglyph Format Controls"],
	[0x1346, 0x143F, "Egyptian Hieroglyphs Extended-A"],
	[0x1440, 0x1467, "Anatolian Hieroglyphs"],
	[0x1610, 0x1613, "Gurung Khema"],
	[0x1680, 0x16A3, "Bamum Supplement"],
	[0x16A4, 0x16A6, "Mro"],
	[0x16A7, 0x16AC, "Tangsa"],
	[0x16AD, 0x16AF, "Bassa Vah"],
	[0x16B0, 0x16B8, "Pahawh Hmong"],
	[0x16D4, 0x16D7, "Kirat Rai"],
	[0x16E4, 0x16E9, "Medefaidrin"],
	[0x16F0, 0x16F9, "Miao"],
	[0x16FE, 0x16FF, "Ideographic Symbols and Punctuation"],
	[0x1700, 0x187F, "Tangut"],
	[0x1880, 0x18AF, "Tangut Components"],
	[0x18B0, 0x18CF, "Khitan Small Script"],
	[0x18D0, 0x18D7, "Tangut Supplement"],
	[0x1AFF, 0x1AFF, "Kana Extended-B"],
	[0x1B00, 0x1B0F, "Kana Supplement"],
	[0x1B10, 0x1B12, "Kana Extended-A"],
	[0x1B13, 0x1B16, "Small Kana Extension"],
	[0x1B17, 0x1B2F, "Nushu"],
	[0x1BC0, 0x1BC9, "Duployan"],
	[0x1BCA, 0x1BCA, "Shorthand Format Controls"],
	[0x1CC0, 0x1CEB, "Symbols for Legacy Computing Supplement"],
	[0x1CF0, 0x1CFC, "Znamenny Musical Notation"],
	[0x1D00, 0x1D0F, "Byzantine Musical Symbols"],
	[0x1D10, 0x1D1F, "Musical Symbols"],
	[0x1D20, 0x1D24, "Ancient Greek Musical Notation"],
	[0x1D2C, 0x1D2D, "Kaktovik Numerals"],
	[0x1D2E, 0x1D2F, "Mayan Numerals"],
	[0x1D30, 0x1D35, "Tai Xuan Jing Symbols"],
	[0x1D36, 0x1D37, "Counting Rod Numerals"],
	[0x1D40, 0x1D7F, "Mathematical Alphanumeric Symbols"],
	[0x1D80, 0x1DAA, "Sutton SignWriting"],
	[0x1DF0, 0x1DFF, "Latin Extended-G"],
	[0x1E00, 0x1E02, "Glagolitic Supplement"],
	[0x1E03, 0x1E08, "Cyrillic Extended-D"],
	[0x1E10, 0x1E14, "Nyiakeng Puachue Hmong"],
	[0x1E29, 0x1E2B, "Toto"],
	[0x1E2C, 0x1E2F, "Wancho"],
	[0x1E4D, 0x1E4F, "Nag Mundari"],
	[0x1E5D, 0x1E5F, "Ol Onal"],
	[0x1E7E, 0x1E7F, "Ethiopic Extended-B"],
	[0x1E80, 0x1E8D, "Mende Kikakui"],
	[0x1E90, 0x1E95, "Adlam"],
	[0x1EC7, 0x1ECB, "Indic Siyaq Numbers"],
	[0x1ED0, 0x1ED4, "Ottoman Siyaq Numbers"],
	[0x1EE0, 0x1EEF, "Arabic Mathematical Alphabetic Symbols"],
	[0x1F00, 0x1F02, "Mahjong Tiles"],
	[0x1F03, 0x1F09, "Domino Tiles"],
	[0x1F0A, 0x1F0F, "Playing Cards"],
	[0x1F10, 0x1F1F, "Enclosed Alphanumeric Supplement"],
	[0x1F20, 0x1F2F, "Enclosed Ideographic Supplement"],
	[0x1F30, 0x1F5F, "Miscellaneous Symbols and Pictographs"],
	[0x1F60, 0x1F64, "Emoticons"],
	[0x1F65, 0x1F67, "Ornamental Dingbats"],
	[0x1F68, 0x1F6F, "Transport and Map Symbols"],
	[0x1F70, 0x1F77, "Alchemical Symbols"],
	[0x1F78, 0x1F7F, "Geometric Shapes Extended"],
	[0x1F80, 0x1F8F, "Supplemental Arrows-C"],
	[0x1F90, 0x1F9F, "Supplemental Symbols and Pictographs"],
	[0x1FA0, 0x1FA6, "Chess Symbols"],
	[0x1FA7, 0x1FAF, "Symbols and Pictographs Extended-A"],
	[0x1FB0, 0x1FBF, "Symbols for Legacy Computing"],
	[0x2000, 0x2A6D, "CJK Unified Ideographs Extension B"],
	[0x2A70, 0x2B73, "CJK Unified Ideographs Extension C"],
	[0x2B74, 0x2B81, "CJK Unified Ideographs Extension D"],
	[0x2B82, 0x2CEA, "CJK Unified Ideographs Extension E"],
	[0x2CEB, 0x2EBE, "CJK Unified Ideographs Extension F"],
	[0x2EBF, 0x2EE5, "CJK Unified Ideographs Extension I"],
	[0x2F80, 0x2FA1, "CJK Compatibility Ideographs Supplement"],
	[0x3000, 0x3134, "CJK Unified Ideographs Extension G"],
	[0x3135, 0x323A, "CJK Unified Ideographs Extension H"],
	[0xE000, 0xE007, "Tags"],
	[0xE010, 0xE01E, "Variation Selectors Supplement"],

	[0xF000, 0xFFFF, "{Supplementary Private Use Area-A}"],
	[0x10000, 0x10FFF, "{Supplementary Private Use Area-B}"]
];
const blockCount = Block.length;
