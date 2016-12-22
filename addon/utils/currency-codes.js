
import EmberObject from 'ember-object';
import { A } from 'ember-array/utils';

/***/
const space = '\u0020';
const apostrophe = '\u0027';
const comma = '\u002c';
const decimal = '\u002e';
//const middleDot = '\u00b7';
//const dotAbove = '\u02d9';
//const easternDecimal = '\u066b';
//const easterComma = '\u066c';

const _cd = `${comma},${decimal}`;
//const _cmd =`${comma},${middleDot}`;

const _dc = `${decimal},${comma}`;
//const _da = `${decimal},${apostrophe}`;

const _sd = `${space},${decimal}`;
const _sc = `${space},${comma}`;

//const _dac =`${dotAbove},${comma}`;

const _ad = `${apostrophe},${decimal}`;
//const _ac = `${apostrophe},${comma}`;

export default A([
	EmberObject.create({
		code: 'AED',
		symbol: "\u062f.\u0625",
		number: '784',
		digits: 2,
		format: _cd,
		currency: 'United Arab Emirates dirham',
		countries: ['united arab emirates']
	}),
	EmberObject.create({
		code: 'AFN',
		symbol: "\u060b",
		number: '971',
		digits: 2,
		format: _cd,
		currency: 'Afghan afghani',
		countries: ['afghanistan']
	}),
	EmberObject.create({
		code: 'ALL',
		symbol: "\u004c\u0065\u006b",
		number: '008',
		digits: 2,
		format: _cd,
		currency: 'Albanian lek',
		countries: ['albania']
	}),
	EmberObject.create({
		code: 'AMD',
		symbol: "\u0564\u0580.",
		number: '051',
		digits: 2,
		format: _cd,
		currency: 'Armenian dram',
		countries: ['armenia']
	}),
	EmberObject.create({
		code: 'ANG',
		symbol: "\u0192",
		number: '532',
		digits: 2,
		format: _dc,
		currency: 'Netherlands Antillean guilder',
		countries: ['curaçao', 'sint maarten']
	}),
	EmberObject.create({
		code: 'AOA',
		symbol: "Kz",
		number: '973',
		digits: 2,
		format: _cd,
		currency: 'Angolan kwanza',
		countries: ['angola']
	}),
	EmberObject.create({
		code: 'ARS',
		symbol: "\u0024",
		number: '032',
		digits: 2,
		format: _dc,
		currency: 'Argentine peso',
		countries: ['argentina']
	}),
	EmberObject.create({
		code: 'AUD',
		symbol: "\u0024",
		number: '036',
		digits: 2,
		format: _sd,
		currency: 'Australian dollar',
		countries: ['australia', 'australian antarctic territory', 'christmas island', 'cocos (keeling) islands', 'heard and mcdonald islands', 'kiribati', 'nauru', 'norfolk island', 'tuvalu']
	}),
	EmberObject.create({
		code: 'AWG',
		symbol: "\u0192",
		number: '533',
		digits: 2,
		format: _cd,
		currency: 'Aruban florin',
		countries: ['aruba']
	}),
	EmberObject.create({
		code: 'AZN',
		symbol: "\u20bc",
		number: '944',
		digits: 2,
		format: _cd,
		currency: 'Azerbaijani manat',
		countries: ['azerbaijan']
	}),
	EmberObject.create({
		code: 'BAM',
		symbol: "\u041a\u041c",
		number: '977',
		digits: 2,
		format: _cd,
		currency: 'Bosnia and Herzegovina convertible mark',
		countries: ['bosnia and herzegovina']
	}),
	EmberObject.create({
		code: 'BBD',
		symbol: "\u0024",
		number: '052',
		digits: 2,
		format: _cd,
		currency: 'Barbados dollar',
		countries: ['barbados']
	}),
	EmberObject.create({
		code: 'BDT',
		symbol: "\u09f3",
		number: '050',
		digits: 2,
		format: _cd,
		currency: 'Bangladeshi taka',
		countries: ['bangladesh']
	}),
	EmberObject.create({
		code: 'BGN',
		symbol: "\u043b\u0432",
		number: '975',
		digits: 2,
		format: _cd,
		currency: 'Bulgarian lev',
		countries: ['bulgaria']
	}),
	EmberObject.create({
		code: 'BHD',
		symbol: "\u0628.\u062f",
		number: '048',
		digits: 3,
		format: _cd,
		currency: 'Bahraini dinar',
		countries: ['bahrain']
	}),
	EmberObject.create({
		code: 'BIF',
		symbol: "Fr",
		number: '108',
		digits: 0,
		format: _cd,
		currency: 'Burundian franc',
		countries: ['burundi']
	}),
	EmberObject.create({
		code: 'BMD',
		symbol: "\u0024",
		number: '060',
		digits: 2,
		format: _cd,
		currency: 'Bermudian dollar',
		countries: ['bermuda']
	}),
	EmberObject.create({
		code: 'BND',
		symbol: "\u0024",
		number: '096',
		digits: 2,
		format: _cd,
		currency: 'Brunei dollar',
		countries: ['brunei', 'singapore']
	}),
	EmberObject.create({
		code: 'BOB',
		symbol: "Bs.",
		number: '068',
		digits: 2,
		format: _cd,
		currency: 'Boliviano',
		countries: ['bolivia']
	}),
	EmberObject.create({
		code: 'BRL',
		symbol: "\u0052\u0024",
		number: '986',
		digits: 2,
		format: _dc,
		currency: 'Brazilian real',
		countries: ['brazil']
	}),
	EmberObject.create({
		code: 'BSD',
		symbol: "\u0024",
		number: '044',
		digits: 2,
		format: _cd,
		currency: 'Bahamian dollar',
		countries: ['bahamas']
	}),
	EmberObject.create({
		code: 'BTN',
		symbol: "Nu.",
		number: '064',
		digits: 2,
		format: _cd,
		currency: 'Bhutanese ngultrum',
		countries: ['bhutan']
	}),
	EmberObject.create({
		code: 'BWP',
		symbol: "P",
		number: '072',
		digits: 2,
		format: _cd,
		currency: 'Botswana pula',
		countries: ['botswana']
	}),
	EmberObject.create({
		code: 'BYN',
		symbol: "Br",
		number: '933',
		digits: 2,
		format: _cd,
		currency: 'New Belarusian ruble',
		countries: ['belarus']
	}),
	EmberObject.create({
		code: 'BZD',
		symbol: "\u0024",
		number: '084',
		digits: 2,
		format: _cd,
		currency: 'Belize dollar',
		countries: ['belize']
	}),
	EmberObject.create({
		code: 'CAD',
		symbol: "\u0024",
		number: '124',
		digits: 2,
		format: _cd,
		currency: 'Canadian dollar',
		countries: ['canada', 'saint pierre and miquelon']
	}),
	EmberObject.create({
		code: 'CDF',
		symbol: "Fr",
		number: '976',
		digits: 2,
		format: _cd,
		currency: 'Congolese franc',
		countries: ['democratic republic of congo']
	}),
	EmberObject.create({
		code: 'CHF',
		symbol: "Fr",
		number: '756',
		digits: 2,
		format: _ad,
		currency: 'Swiss franc',
		countries: ['switzerland', 'liechtenstein']
	}),
	EmberObject.create({
		code: 'CLP',
		symbol: "\u0024",
		number: '152',
		digits: 0,
		format: _dc,
		currency: 'Chilean peso',
		countries: ['chile']
	}),
	EmberObject.create({
		code: 'CNY',
		symbol: "\u00a5",
		number: '156',
		digits: 2,
		format: _cd,
		currency: 'Chinese yuan',
		countries: ['china']
	}),
	EmberObject.create({
		code: 'COP',
		symbol: "\u0024",
		number: '170',
		digits: 2,
		format: _dc,
		currency: 'Colombian peso',
		countries: ['colombia']
	}),
	EmberObject.create({
		code: 'CRC',
		symbol: "\u20a1",
		number: '188',
		digits: 2,
		format: _dc,
		currency: 'Costa Rican colon',
		countries: ['costa rica']
	}),
	EmberObject.create({
		code: 'CUP',
		symbol: "\u0024",
		number: '192',
		digits: 2,
		format: _cd,
		currency: 'Cuban peso',
		countries: ['cuba']
	}),
	EmberObject.create({
		code: 'CVE',
		symbol: "\u0024",
		number: '132',
		digits: 0,
		format: _cd,
		currency: 'Cape Verde escudo',
		countries: ['cape verde']
	}),
	EmberObject.create({
		code: 'CZK',
		symbol: "K\u010d",
		number: '203',
		digits: 2,
		format: _dc,
		currency: 'Czech koruna',
		countries: ['czech republic']
	}),
	EmberObject.create({
		code: 'DJF',
		symbol: "Fdj",
		number: '262',
		digits: 0,
		format: _cd,
		currency: 'Djiboutian franc',
		countries: ['djibouti']
	}),
	EmberObject.create({
		code: 'DKK',
		symbol: "kr",
		number: '208',
		digits: 2,
		format: _dc,
		currency: 'Danish krone',
		countries: ['denmark', 'faroe islands', 'greenland']
	}),
	EmberObject.create({
		code: 'DOP',
		symbol: "\u0024",
		number: '214',
		digits: 2,
		format: _cd,
		currency: 'Dominican peso',
		countries: ['dominican republic']
	}),
	EmberObject.create({
		code: 'DZD',
		symbol: "\u062f.\u062c",
		number: '012',
		digits: 2,
		format: _cd,
		currency: 'Algerian dinar',
		countries: ['algeria']
	}),
	EmberObject.create({
		code: 'EGP',
		symbol: "\u062c.\u0645",
		number: '818',
		digits: 2,
		format: _cd,
		currency: 'Egyptian pound',
		countries: ['egypt', 'palestinian territories']
	}),
	EmberObject.create({
		code: 'ERN',
		symbol: "Nfk",
		number: '232',
		digits: 2,
		format: _cd,
		currency: 'Eritrean nakfa',
		countries: ['eritrea']
	}),
	EmberObject.create({
		code: 'ETB',
		symbol: "Br",
		number: '230',
		digits: 2,
		format: _cd,
		currency: 'Ethiopian birr',
		countries: ['ethiopia']
	}),
	EmberObject.create({
		code: 'EUR',
		symbol: "\u20ac",
		number: '978',
		digits: 2,
		format: _cd,
		currency: 'Euro',
		countries: [
			'andorra', 'austria', 'belgium', 'cyprus', 'estonia', 'finland', 'france',
			'germany', 'greece', 'ireland', 'italy', 'kosovo', 'luxembourg', 'malta',
			'monaco', 'montenegro', 'netherlands', 'portugal', 'san marino', 'slovakia',
			'slovenia', 'spain', 'vatican city'
		]
	}),
	EmberObject.create({
		code: 'FJD',
		symbol: "\u0024",
		number: '242',
		digits: 2,
		format: _cd,
		currency: 'Fiji dollar',
		countries: ['fiji']
	}),
	EmberObject.create({
		code: 'FKP',
		symbol: "\u00a3",
		number: '238',
		digits: 2,
		format: _cd,
		currency: 'Falkland Islands pound',
		countries: ['falkland islands']
	}),
	EmberObject.create({
		code: 'GBP',
		symbol: "\u00a3",
		number: '826',
		digits: 2,
		format: _cd,
		currency: 'Pound sterling',
		countries: ['united kingdom', 'british crown dependencies (the  isle of man and the channel islands)', 'south georgia and the south sandwich islands', 'british antarctic territory', 'british indian ocean territory']
	}),
	EmberObject.create({
		code: 'GEL',
		symbol: "\u10da",
		number: '981',
		digits: 2,
		format: _cd,
		currency: 'Georgian lari',
		countries: ['georgia']
	}),
	EmberObject.create({
		code: 'GHS',
		symbol: "\u20b5",
		number: '936',
		digits: 2,
		format: _cd,
		currency: 'Ghanaian cedi',
		countries: ['ghana']
	}),
	EmberObject.create({
		code: 'GIP',
		symbol: "\u00a3",
		number: '292',
		digits: 2,
		format: _cd,
		currency: 'Gibraltar pound',
		countries: ['gibraltar']
	}),
	EmberObject.create({
		code: 'GMD',
		symbol: "D",
		number: '270',
		digits: 2,
		format: _cd,
		currency: 'Gambian dalasi',
		countries: ['gambia']
	}),
	EmberObject.create({
		code: 'GNF',
		symbol: "Fr",
		number: '324',
		digits: 0,
		format: _cd,
		currency: 'Guinean franc',
		countries: ['guinea']
	}),
	EmberObject.create({
		code: 'GTQ',
		symbol: "Q",
		number: '320',
		digits: 2,
		format: _cd,
		currency: 'Guatemalan quetzal',
		countries: ['guatemala']
	}),
	EmberObject.create({
		code: 'GYD',
		symbol: "\u0024",
		number: '328',
		digits: 2,
		format: _cd,
		currency: 'Guyanese dollar',
		countries: ['guyana']
	}),
	EmberObject.create({
		code: 'HKD',
		symbol: "\u0024",
		number: '344',
		digits: 2,
		format: _cd,
		currency: 'Hong Kong dollar',
		countries: ['hong kong', 'macao']
	}),
	EmberObject.create({
		code: 'HNL',
		symbol: "L",
		number: '340',
		digits: 2,
		format: _cd,
		currency: 'Honduran lempira',
		countries: ['honduras']
	}),
	EmberObject.create({
		code: 'HRK',
		symbol: "kn",
		number: '191',
		digits: 2,
		format: _dc,
		currency: 'Croatian kuna',
		countries: ['croatia']
	}),
	EmberObject.create({
		code: 'HTG',
		symbol: "G",
		number: '332',
		digits: 2,
		format: _cd,
		currency: 'Haitian gourde',
		countries: ['haiti']
	}),
	EmberObject.create({
		code: 'HUF',
		symbol: "Ft",
		number: '348',
		digits: 2,
		format: _dc,
		currency: 'Hungarian forint',
		countries: ['hungary']
	}),
	EmberObject.create({
		code: 'IDR',
		symbol: "Rp",
		number: '360',
		digits: 2,
		format: _dc,
		currency: 'Indonesian rupiah',
		countries: ['indonesia']
	}),
	EmberObject.create({
		code: 'ILS',
		symbol: "\u20aa",
		number: '376',
		digits: 2,
		format: _cd,
		currency: 'Israeli new shekel',
		countries: ['israel', 'palestinian territories']
	}),
	EmberObject.create({
		code: 'INR',
		symbol: "\u20b9",
		number: '356',
		digits: 2,
		format: _cd,
		currency: 'Indian rupee',
		countries: ['india']
	}),
	EmberObject.create({
		code: 'IQD',
		symbol: "\u0639.\u062f",
		number: '368',
		digits: 3,
		format: _cd,
		currency: 'Iraqi dinar',
		countries: ['iraq']
	}),
	EmberObject.create({
		code: 'IRR',
		symbol: "\ufdfc",
		number: '364',
		digits: 2,
		format: _cd,
		currency: 'Iranian rial',
		countries: ['iran']
	}),
	EmberObject.create({
		code: 'ISK',
		symbol: "kr",
		number: '352',
		digits: 0,
		format: _dc,
		currency: 'Icelandic króna',
		countries: ['iceland']
	}),
	EmberObject.create({
		code: 'JMD',
		symbol: "\u0024",
		number: '388',
		digits: 2,
		format: _cd,
		currency: 'Jamaican dollar',
		countries: ['jamaica']
	}),
	EmberObject.create({
		code: 'JOD',
		symbol: "\u062f.\u0627",
		number: '400',
		digits: 3,
		format: _cd,
		currency: 'Jordanian dinar',
		countries: ['jordan']
	}),
	EmberObject.create({
		code: 'JPY',
		symbol: "\u00a5",
		number: '392',
		digits: 0,
		format: _cd,
		currency: 'Japanese yen',
		countries: ['japan']
	}),
	EmberObject.create({
		code: 'KES',
		symbol: "KSh",
		number: '404',
		digits: 2,
		format: _cd,
		currency: 'Kenyan shilling',
		countries: ['kenya']
	}),
	EmberObject.create({
		code: 'KGS',
		symbol: "som",
		number: '417',
		digits: 2,
		format: _cd,
		currency: 'Kyrgyzstani som',
		countries: ['kyrgyzstan']
	}),
	EmberObject.create({
		code: 'KHR',
		symbol: "\u17db",
		number: '116',
		digits: 2,
		format: _cd,
		currency: 'Cambodian riel',
		countries: ['cambodia']
	}),
	EmberObject.create({
		code: 'KMF',
		symbol: "Fr",
		number: '174',
		digits: 0,
		format: _cd,
		currency: 'Comoro franc',
		countries: ['comoros']
	}),
	EmberObject.create({
		code: 'KPW',
		symbol: "\u20a9",
		number: '408',
		digits: 2,
		format: _cd,
		currency: 'North Korean won',
		countries: ['north korea']
	}),
	EmberObject.create({
		code: 'KRW',
		symbol: "\u20a9",
		number: '410',
		digits: 0,
		format: _cd,
		currency: 'South Korean won',
		countries: ['south korea']
	}),
	EmberObject.create({
		code: 'KWD',
		symbol: "\u062f.\u0643",
		number: '414',
		digits: 3,
		format: _cd,
		currency: 'Kuwaiti dinar',
		countries: ['kuwait']
	}),
	EmberObject.create({
		code: 'KYD',
		symbol: "\u0024",
		number: '136',
		digits: 2,
		format: _cd,
		currency: 'Cayman Islands dollar',
		countries: ['cayman islands']
	}),
	EmberObject.create({
		code: 'KZT',
		symbol: "\u3012",
		number: '398',
		digits: 2,
		format: _cd,
		currency: 'Kazakhstani tenge',
		countries: ['kazakhstan']
	}),
	EmberObject.create({
		code: 'LAK',
		symbol: "\u20ad",
		number: '418',
		digits: 2,
		format: _cd,
		currency: 'Lao kip',
		countries: ['laos']
	}),
	EmberObject.create({
		code: 'LBP',
		symbol: "\u0644.\u0644",
		number: '422',
		digits: 2,
		format: _sd,
		currency: 'Lebanese pound',
		countries: ['lebanon']
	}),
	EmberObject.create({
		code: 'LKR',
		symbol: "\u20a8",
		number: '144',
		digits: 2,
		format: _cd,
		currency: 'Sri Lankan rupee',
		countries: ['sri lanka']
	}),
	EmberObject.create({
		code: 'LRD',
		symbol: "\u0024",
		number: '430',
		digits: 2,
		format: _cd,
		currency: 'Liberian dollar',
		countries: ['liberia']
	}),
	EmberObject.create({
		code: 'LSL',
		symbol: "L",
		number: '426',
		digits: 2,
		format: _cd,
		currency: 'Lesotho loti',
		countries: ['lesotho']
	}),
	EmberObject.create({
		code: 'LYD',
		symbol: "\u0644.\u062f",
		number: '434',
		digits: 3,
		format: _cd,
		currency: 'Libyan dinar',
		countries: ['libya']
	}),
	EmberObject.create({
		code: 'MAD',
		symbol: "\u062f.\u0645.",
		number: '504',
		digits: 2,
		format: _cd,
		currency: 'Moroccan dirham',
		countries: ['morocco']
	}),
	EmberObject.create({
		code: 'MDL',
		symbol: "L",
		number: '498',
		digits: 2,
		format: _cd,
		currency: 'Moldovan leu',
		countries: ['moldova (except  transnistria)']
	}),
	EmberObject.create({
		code: 'MGA',
		symbol: "Ar",
		number: '969',
		digits: 1,
		format: _cd,
		currency: 'Malagasy ariary',
		countries: ['madagascar']
	}),
	EmberObject.create({
		code: 'MKD',
		symbol: "\u0434\u0435\u043d",
		number: '807',
		digits: 2,
		format: _cd,
		currency: 'Macedonian denar',
		countries: ['macedonia']
	}),
	EmberObject.create({
		code: 'MMK',
		symbol: "K",
		number: '104',
		digits: 2,
		format: _cd,
		currency: 'Myanma kyat',
		countries: ['myanmar']
	}),
	EmberObject.create({
		code: 'MNT',
		symbol: "\u20ae",
		number: '496',
		digits: 2,
		format: _cd,
		currency: 'Mongolian tugrik',
		countries: ['mongolia']
	}),
	EmberObject.create({
		code: 'MOP',
		symbol: "P",
		number: '446',
		digits: 2,
		format: _cd,
		currency: 'Macanese pataca',
		countries: ['macao']
	}),
	EmberObject.create({
		code: 'MRO',
		symbol: "UM",
		number: '478',
		digits: 1,
		format: _cd,
		currency: 'Mauritanian ouguiya',
		countries: ['mauritania']
	}),
	EmberObject.create({
		code: 'MUR',
		symbol: "\u20a8",
		number: '480',
		digits: 2,
		format: _cd,
		currency: 'Mauritian rupee',
		countries: ['mauritius']
	}),
	EmberObject.create({
		code: 'MVR',
		symbol: "MVR",
		number: '462',
		digits: 2,
		format: _cd,
		currency: 'Maldivian rufiyaa',
		countries: ['maldives']
	}),
	EmberObject.create({
		code: 'MWK',
		symbol: "MK",
		number: '454',
		digits: 2,
		format: _cd,
		currency: 'Malawian kwacha',
		countries: ['malawi']
	}),
	EmberObject.create({
		code: 'MXN',
		symbol: "\u0024",
		number: '484',
		digits: 2,
		format: _cd,
		currency: 'Mexican peso',
		countries: ['mexico']
	}),
	EmberObject.create({
		code: 'MYR',
		symbol: "RM",
		number: '458',
		digits: 2,
		format: _cd,
		currency: 'Malaysian ringgit',
		countries: ['malaysia']
	}),
	EmberObject.create({
		code: 'MZN',
		symbol: "MTn",
		number: '943',
		digits: 2,
		format: _cd,
		currency: 'Mozambican metical',
		countries: ['mozambique']
	}),
	EmberObject.create({
		code: 'NAD',
		symbol: "\u0024",
		number: '516',
		digits: 2,
		format: _cd,
		currency: 'Namibian dollar',
		countries: ['namibia']
	}),
	EmberObject.create({
		code: 'NGN',
		symbol: "\u20a6",
		number: '566',
		digits: 2,
		format: _cd,
		currency: 'Nigerian naira',
		countries: ['nigeria']
	}),
	EmberObject.create({
		code: 'NIO',
		symbol: "\u0043\u0024",
		number: '558',
		digits: 2,
		format: _cd,
		currency: 'Nicaraguan córdoba',
		countries: ['nicaragua']
	}),
	EmberObject.create({
		code: 'NOK',
		symbol: "kr",
		number: '578',
		digits: 2,
		format: _dc,
		currency: 'Norwegian krone',
		countries: ['norway', 'svalbard', 'jan mayen', 'bouvet island', 'queen maud land', 'peter i island']
	}),
	EmberObject.create({
		code: 'NPR',
		symbol: "\u20a8",
		number: '524',
		digits: 2,
		format: _cd,
		currency: 'Nepalese rupee',
		countries: ['nepal']
	}),
	EmberObject.create({
		code: 'NZD',
		symbol: "\u0024",
		number: '554',
		digits: 2,
		format: _cd,
		currency: 'New Zealand dollar',
		countries: ['cook islands', 'new zealand', 'niue', 'pitcairn', 'tokelau', 'ross dependency']
	}),
	EmberObject.create({
		code: 'OMR',
		symbol: "\u0631.\u0639.",
		number: '512',
		digits: 3,
		format: _cd,
		currency: 'Omani rial',
		countries: ['oman']
	}),
	EmberObject.create({
		code: 'PAB',
		symbol: "B/.",
		number: '590',
		digits: 2,
		format: _cd,
		currency: 'Panamanian balboa',
		countries: ['panama']
	}),
	EmberObject.create({
		code: 'PEN',
		symbol: "S/.",
		number: '604',
		digits: 2,
		format: _cd,
		currency: 'Peruvian nuevo sol',
		countries: ['peru']
	}),
	EmberObject.create({
		code: 'PGK',
		symbol: "K",
		number: '598',
		digits: 2,
		format: _cd,
		currency: 'Papua New Guinean kina',
		countries: ['papua new guinea']
	}),
	EmberObject.create({
		code: 'PHP',
		symbol: "\u20b1",
		number: '608',
		digits: 2,
		format: _cd,
		currency: 'Philippine peso',
		countries: ['philippines']
	}),
	EmberObject.create({
		code: 'PKR',
		symbol: "\u20a8",
		number: '586',
		digits: 2,
		format: _cd,
		currency: 'Pakistani rupee',
		countries: ['pakistan']
	}),
	EmberObject.create({
		code: 'PLN',
		symbol: "z\u0142",
		number: '985',
		digits: 2,
		format: _sc,
		currency: 'Polish złoty',
		countries: ['poland']
	}),
	EmberObject.create({
		code: 'PYG',
		symbol: "\u20b2",
		number: '600',
		digits: 0,
		format: _cd,
		currency: 'Paraguayan guaraní',
		countries: ['paraguay']
	}),
	EmberObject.create({
		code: 'QAR',
		symbol: "\u0631.\u0642",
		number: '634',
		digits: 2,
		format: _cd,
		currency: 'Qatari riyal',
		countries: ['qatar']
	}),
	EmberObject.create({
		code: 'RON',
		symbol: "L",
		number: '946',
		digits: 2,
		format: _dc,
		currency: 'Romanian new leu',
		countries: ['romania']
	}),
	EmberObject.create({
		code: 'RSD',
		symbol: "\u0420\u0421\u0414",
		number: '941',
		digits: 2,
		format: _cd,
		currency: 'Serbian dinar',
		countries: ['serbia']
	}),
	EmberObject.create({
		code: 'RUB',
		symbol: "\u0440.",
		number: '643',
		digits: 2,
		format: _dc,
		currency: 'Russian rouble',
		countries: ['russia', 'abkhazia', 'south ossetia']
	}),
	EmberObject.create({
		code: 'RWF',
		symbol: "FRw",
		number: '646',
		digits: 0,
		format: _cd,
		currency: 'Rwandan franc',
		countries: ['rwanda']
	}),
	EmberObject.create({
		code: 'SAR',
		symbol: "\u0631.\u0633",
		number: '682',
		digits: 2,
		format: _cd,
		currency: 'Saudi riyal',
		countries: ['saudi arabia']
	}),
	EmberObject.create({
		code: 'SBD',
		symbol: "\u0024",
		number: '090',
		digits: 2,
		format: _cd,
		currency: 'Solomon Islands dollar',
		countries: ['solomon islands']
	}),
	EmberObject.create({
		code: 'SCR',
		symbol: "\u20a8",
		number: '690',
		digits: 2,
		format: _cd,
		currency: 'Seychelles rupee',
		countries: ['seychelles']
	}),
	EmberObject.create({
		code: 'SDG',
		symbol: "\u00a3",
		number: '938',
		digits: 2,
		format: _cd,
		currency: 'Sudanese pound',
		countries: ['sudan']
	}),
	EmberObject.create({
		code: 'SEK',
		symbol: "kr",
		number: '752',
		digits: 2,
		format: _sc,
		currency: 'Swedish krona/kronor',
		countries: ['sweden']
	}),
	EmberObject.create({
		code: 'SGD',
		symbol: "\u0024",
		number: '702',
		digits: 2,
		format: _cd,
		currency: 'Singapore dollar',
		countries: ['singapore', 'brunei']
	}),
	EmberObject.create({
		code: 'SHP',
		symbol: "\u00a3",
		number: '654',
		digits: 2,
		format: _cd,
		currency: 'Saint Helena pound',
		countries: ['saint helena']
	}),
	EmberObject.create({
		code: 'SLL',
		symbol: "Le",
		number: '694',
		digits: 2,
		format: _cd,
		currency: 'Sierra Leonean leone',
		countries: ['sierra leone']
	}),
	EmberObject.create({
		code: 'SOS',
		symbol: "Sh",
		number: '706',
		digits: 2,
		format: _cd,
		currency: 'Somali shilling',
		countries: ['somalia']
	}),
	EmberObject.create({
		code: 'SRD',
		symbol: "\u0024",
		number: '968',
		digits: 2,
		format: _cd,
		currency: 'Surinamese dollar',
		countries: ['suriname']
	}),
	EmberObject.create({
		code: 'SSP',
		symbol: "\u00a3",
		number: '728',
		digits: 2,
		format: _cd,
		currency: 'South Sudanese pound',
		countries: ['south sudan']
	}),
	EmberObject.create({
		code: 'STD',
		symbol: "Db",
		number: '678',
		digits: 2,
		format: _cd,
		currency: 'São Tomé and Príncipe dobra',
		countries: ['são tomé and príncipe']
	}),
	EmberObject.create({
		code: 'SVC',
		symbol: "\u20a1",
		digits: 2,
		format: _cd,
		currency: 'Salvadoran colon',
		countries: ['el salvador']
	}),
	EmberObject.create({
		code: 'SYP',
		symbol: "\u00a3S",
		number: '760',
		digits: 2,
		format: _cd,
		currency: 'Syrian pound',
		countries: ['syria']
	}),
	EmberObject.create({
		code: 'SZL',
		symbol: "L",
		number: '748',
		digits: 2,
		format: `${comma}${space},${decimal}`,
		currency: 'Swazi lilangeni',
		countries: ['swaziland']
	}),
	EmberObject.create({
		code: 'THB',
		symbol: "\u0e3f",
		number: '764',
		digits: 2,
		format: _cd,
		currency: 'Thai baht',
		countries: ['thailand']
	}),
	EmberObject.create({
		code: 'TJS',
		symbol: "\u0405\u041c",
		number: '972',
		digits: 2,
		format: _cd,
		currency: 'Tajikistani somoni',
		countries: ['tajikistan']
	}),
	EmberObject.create({
		code: 'TMT',
		symbol: "m",
		number: '934',
		digits: 2,
		format: _cd,
		currency: 'Turkmenistani manat',
		countries: ['turkmenistan']
	}),
	EmberObject.create({
		code: 'TND',
		symbol: "\u062f.\u062a",
		number: '788',
		digits: 3,
		format: _cd,
		currency: 'Tunisian dinar',
		countries: ['tunisia']
	}),
	EmberObject.create({
		code: 'TOP',
		symbol: "\u0054\u0024",
		number: '776',
		digits: 2,
		format: _cd,
		currency: 'Tongan paʻanga',
		countries: ['tonga']
	}),
	EmberObject.create({
		code: 'TRY',
		symbol: "TL",
		number: '949',
		digits: 2,
		format: _cd,
		currency: 'Turkish lira',
		countries: ['turkey',  'northern cyprus']
	}),
	EmberObject.create({
		code: 'TTD',
		symbol: "\u0024",
		number: '780',
		digits: 2,
		format: _cd,
		currency: 'Trinidad and Tobago dollar',
		countries: ['trinidad and tobago']
	}),
	EmberObject.create({
		code: 'TWD',
		symbol: "\u0024",
		number: '901',
		digits: 2,
		format: _cd,
		currency: 'New Taiwan dollar',
		countries: ['republic of china (taiwan)']
	}),
	EmberObject.create({
		code: 'TZS',
		symbol: "Sh",
		number: '834',
		digits: 2,
		format: _cd,
		currency: 'Tanzanian shilling',
		countries: ['tanzania']
	}),
	EmberObject.create({
		code: 'UAH',
		symbol: "\u20b4",
		number: '980',
		digits: 2,
		format: _sc,
		currency: 'Ukrainian hryvnia',
		countries: ['ukraine']
	}),
	EmberObject.create({
		code: 'UGX',
		symbol: "USh",
		number: '800',
		digits: 0,
		format: _cd,
		currency: 'Ugandan shilling',
		countries: ['uganda']
	}),
	EmberObject.create({
		code: 'USD',
		symbol: "\u0024",
		number: '840',
		digits: 2,
		format: _cd,
		currency: 'United States dollar',
		countries: [
			'american samoa', 'barbados', 'bermuda', 'british indian ocean territory',
			'british virgin islands, caribbean netherlands', 'ecuador', 'el salvador',
			'guam', 'haiti', 'marshall islands', 'federated states of micronesia',
			'northern mariana islands', 'palau', 'panama', 'puerto rico', 'timor-leste',
			'turks and caicos islands', 'united states', 'u.s. virgin islands', 'zimbabwe'
		]
	}),
	EmberObject.create({
		code: 'UYU',
		symbol: "\u0024",
		number: '858',
		digits: 2,
		format: _dc,
		currency: 'Uruguayan peso',
		countries: ['uruguay']
	}),
	EmberObject.create({
		code: 'UZS',
		symbol: "\u043b\u0432",
		number: '860',
		digits: 2,
		format: _cd,
		currency: 'Uzbekistan som',
		countries: ['uzbekistan']
	}),
	EmberObject.create({
		code: 'VEF',
		symbol: "Bs F",
		number: '937',
		digits: 2,
		format: _dc,
		currency: 'Venezuelan bolívar',
		countries: ['venezuela']
	}),
	EmberObject.create({
		code: 'VND',
		symbol: "\u20ab",
		number: '704',
		digits: 0,
		format: _dc,
		currency: 'Vietnamese dong',
		countries: ['vietnam']
	}),
	EmberObject.create({
		code: 'VUV',
		symbol: "Vt",
		number: '548',
		digits: 0,
		format: _cd,
		currency: 'Vanuatu vatu',
		countries: ['vanuatu']
	}),
	EmberObject.create({
		code: 'WST',
		symbol: "SAT$",
		number: '882',
		digits: 2,
		format: _cd,
		currency: 'Samoan tala',
		countries: ['samoa']
	}),
	EmberObject.create({
		code: 'XAF',
		symbol: "FCFA",
		number: '950',
		digits: 0,
		format: _cd,
		currency: 'CFA franc BEAC',
		countries: ['cameroon', 'central african republic', 'republic of the congo', 'chad', 'equatorial guinea', 'gabon']
	}),
	EmberObject.create({
		code: 'XBT',
		symbol: "\u20bf",
		digits: 0,
		format: _cd,
		currency: 'Bitcoin',
	}),
	EmberObject.create({
		code: 'XCD',
		symbol: "\u0024",
		number: '951',
		digits: 2,
		format: _cd,
		currency: 'East Caribbean dollar',
		countries: ['anguilla', 'antigua and barbuda', 'dominica', 'grenada', 'montserrat', 'saint kitts and nevis', 'saint lucia', 'saint vincent and the grenadines']
	}),
	EmberObject.create({
		code: 'XDR',
		symbol: "SDR",
		number: '960',
		digits: 0,
		format: _cd,
		currency: 'Special drawing rights',
		countries: ['international monetary fund']
	}),
	EmberObject.create({
		code: 'XOF',
		symbol: "CFA",
		number: '952',
		digits: 0,
		format: _cd,
		currency: 'CFA franc BCEAO',
		countries: ['benin', 'burkina faso', 'côte d\'ivoire', 'guinea-bissau', 'mali', 'niger', 'senegal', 'togo']
	}),
	EmberObject.create({
		code: 'XPF',
		symbol: "Fr",
		number: '953',
		digits: 0,
		format: _cd,
		currency: 'CFP franc (Franc du Pacifique)',
		countries: ['french polynesia', 'new caledonia', 'wallis and futuna']
	}),
	EmberObject.create({
		code: 'XTS',
		symbol: 'T',
		number: '963',
		digits: 4,
		format: _cd,
		currency: 'Code reserved for testing purposes',
	}),
	EmberObject.create({
		code: 'XXX',
		symbol: '',
		number: '999',
		digits: 0,
		format: _cd,
		currency: 'No Currency',
	}),
	EmberObject.create({
		code: 'YER',
		symbol: "\ufdfc",
		number: '886',
		digits: 2,
		format: _cd,
		currency: 'Yemeni rial',
		countries: ['yemen']
	}),
	EmberObject.create({
		code: 'ZAR',
		symbol: "R",
		number: '710',
		digits: 2,
		format: _sd,
		currency: 'South African rand',
		countries: ['south africa']
	}),
	EmberObject.create({
		code: 'ZMW',
		symbol: "ZK",
		number: '967',
		digits: 2,
		format: _cd,
		currency: 'Zambian kwacha',
		countries: ['zambia']
	}),
	EmberObject.create({
		code: 'ZWL',
		symbol: "\u0024",
		number: '932',
		digits: 2,
		format: _sd,
		currency: 'Zimbabwean dollar',
		countries: ['zimbabwe']
	})
]);


