/**
 * This file is autogenerated. Do not edit!
 * ----------------------------------------
 **/

import Alphanumeric from './src/plugins/dataTypes/Alphanumeric/config';
import AutoIncrement from './src/plugins/dataTypes/AutoIncrement/config';
import BitcoinAddress from './src/plugins/dataTypes/BitcoinAddress/config';
import Boolean from './src/plugins/dataTypes/Boolean/config';
import CVV from './src/plugins/dataTypes/CVV/config';
import City from './src/plugins/dataTypes/City/config';
import Colour from './src/plugins/dataTypes/Colour/config';
import Company from './src/plugins/dataTypes/Company/config';
import Computed from './src/plugins/dataTypes/Computed/config';
import Constant from './src/plugins/dataTypes/Constant/config';
import Country from './src/plugins/dataTypes/Country/config';
import Currency from './src/plugins/dataTypes/Currency/config';
import Date from './src/plugins/dataTypes/Date/config';
import Email from './src/plugins/dataTypes/Email/config';
import GUID from './src/plugins/dataTypes/GUID/config';
import IBAN from './src/plugins/dataTypes/IBAN/config';
import LatLng from './src/plugins/dataTypes/LatLng/config';
import List from './src/plugins/dataTypes/List/config';
import Names from './src/plugins/dataTypes/Names/config';
import NormalDistribution from './src/plugins/dataTypes/NormalDistribution/config';
import NumberRange from './src/plugins/dataTypes/NumberRange/config';
import OrganizationNumber from './src/plugins/dataTypes/OrganizationNumber/config';
import PAN from './src/plugins/dataTypes/PAN/config';
import PIN from './src/plugins/dataTypes/PIN/config';
import PersonalNumber from './src/plugins/dataTypes/PersonalNumber/config';
import Phone from './src/plugins/dataTypes/Phone/config';
import PostalZip from './src/plugins/dataTypes/PostalZip/config';
import Region from './src/plugins/dataTypes/Region/config';
import Rut from './src/plugins/dataTypes/Rut/config';
import SIRET from './src/plugins/dataTypes/SIRET/config';
import StreetAddress from './src/plugins/dataTypes/StreetAddress/config';
import TextFixed from './src/plugins/dataTypes/TextFixed/config';
import TextRandom from './src/plugins/dataTypes/TextRandom/config';
import Time from './src/plugins/dataTypes/Time/config';
import Track1 from './src/plugins/dataTypes/Track1/config';
import Track2 from './src/plugins/dataTypes/Track2/config';
import URLs from './src/plugins/dataTypes/URLs/config';
import WeightedList from './src/plugins/dataTypes/WeightedList/config';

export const dataTypes = {
	Alphanumeric,
	AutoIncrement,
	BitcoinAddress,
	Boolean,
	CVV,
	City,
	Colour,
	Company,
	Computed,
	Constant,
	Country,
	Currency,
	Date,
	Email,
	GUID,
	IBAN,
	LatLng,
	List,
	Names,
	NormalDistribution,
	NumberRange,
	OrganizationNumber,
	PAN,
	PIN,
	PersonalNumber,
	Phone,
	PostalZip,
	Region,
	Rut,
	SIRET,
	StreetAddress,
	TextFixed,
	TextRandom,
	Time,
	Track1,
	Track2,
	URLs,
	WeightedList
};

export type DataTypeFolder = keyof typeof dataTypes;

export const blacklistedDataTypeFolders = ['BitcoinAddress','OrganizationNumber','PersonalNumber','SIRET'];

import CSV from './src/plugins/exportTypes/CSV/config';
import CSharp from './src/plugins/exportTypes/CSharp/config';
import HTML from './src/plugins/exportTypes/HTML/config';
import JSON from './src/plugins/exportTypes/JSON/config';
import Javascript from './src/plugins/exportTypes/Javascript/config';
import LDIF from './src/plugins/exportTypes/LDIF/config';
import PHP from './src/plugins/exportTypes/PHP/config';
import Perl from './src/plugins/exportTypes/Perl/config';
import Python from './src/plugins/exportTypes/Python/config';
import Ruby from './src/plugins/exportTypes/Ruby/config';
import SQL from './src/plugins/exportTypes/SQL/config';
import Typescript from './src/plugins/exportTypes/Typescript/config';
import XML from './src/plugins/exportTypes/XML/config';

export const exportTypes = {
	CSV,
	CSharp,
	HTML,
	JSON,
	Javascript,
	LDIF,
	PHP,
	Perl,
	Python,
	Ruby,
	SQL,
	Typescript,
	XML
};

export type ExportTypeFolder = keyof typeof exportTypes;

import CountryAustralia from './src/plugins/countries/Australia/bundle';
import CountryAustria from './src/plugins/countries/Austria/bundle';
import CountryBelgium from './src/plugins/countries/Belgium/bundle';
import CountryBrazil from './src/plugins/countries/Brazil/bundle';
import CountryCanada from './src/plugins/countries/Canada/bundle';
import CountryChile from './src/plugins/countries/Chile/bundle';
import CountryChina from './src/plugins/countries/China/bundle';
import CountryColombia from './src/plugins/countries/Colombia/bundle';
import CountryCostaRica from './src/plugins/countries/CostaRica/bundle';
import CountryFrance from './src/plugins/countries/France/bundle';
import CountryGermany from './src/plugins/countries/Germany/bundle';
import CountryIndia from './src/plugins/countries/India/bundle';
import CountryIndonesia from './src/plugins/countries/Indonesia/bundle';
import CountryIreland from './src/plugins/countries/Ireland/bundle';
import CountryItaly from './src/plugins/countries/Italy/bundle';
import CountryMexico from './src/plugins/countries/Mexico/bundle';
import CountryNetherlands from './src/plugins/countries/Netherlands/bundle';
import CountryNewZealand from './src/plugins/countries/NewZealand/bundle';
import CountryNigeria from './src/plugins/countries/Nigeria/bundle';
import CountryNorway from './src/plugins/countries/Norway/bundle';
import CountryPakistan from './src/plugins/countries/Pakistan/bundle';
import CountryPeru from './src/plugins/countries/Peru/bundle';
import CountryPhilippines from './src/plugins/countries/Philippines/bundle';
import CountryPoland from './src/plugins/countries/Poland/bundle';
import CountryRussia from './src/plugins/countries/Russia/bundle';
import CountrySingapore from './src/plugins/countries/Singapore/bundle';
import CountrySouthAfrica from './src/plugins/countries/SouthAfrica/bundle';
import CountrySouthKorea from './src/plugins/countries/SouthKorea/bundle';
import CountrySpain from './src/plugins/countries/Spain/bundle';
import CountrySweden from './src/plugins/countries/Sweden/bundle';
import CountryTurkey from './src/plugins/countries/Turkey/bundle';
import CountryUK from './src/plugins/countries/UK/bundle';
import CountryUS from './src/plugins/countries/US/bundle';
import CountryUkraine from './src/plugins/countries/Ukraine/bundle';
import CountryVietnam from './src/plugins/countries/Vietnam/bundle';

export const countryList = ['Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'China', 'Colombia', 'CostaRica', 'France', 'Germany', 'India', 'Indonesia', 'Ireland', 'Italy', 'Mexico', 'Netherlands', 'NewZealand', 'Nigeria', 'Norway', 'Pakistan', 'Peru', 'Philippines', 'Poland', 'Russia', 'Singapore', 'SouthAfrica', 'SouthKorea', 'Spain', 'Sweden', 'Turkey', 'UK', 'US', 'Ukraine', 'Vietnam'];
export const countries = ['Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'China', 'Colombia', 'CostaRica', 'France', 'Germany', 'India', 'Indonesia', 'Ireland', 'Italy', 'Mexico', 'Netherlands', 'NewZealand', 'Nigeria', 'Norway', 'Pakistan', 'Peru', 'Philippines', 'Poland', 'Russia', 'Singapore', 'SouthAfrica', 'SouthKorea', 'Spain', 'Sweden', 'Turkey', 'UK', 'US', 'Ukraine', 'Vietnam'] as const;
export const countryMethods = {
	Australia: CountryAustralia,
	Austria: CountryAustria,
	Belgium: CountryBelgium,
	Brazil: CountryBrazil,
	Canada: CountryCanada,
	Chile: CountryChile,
	China: CountryChina,
	Colombia: CountryColombia,
	CostaRica: CountryCostaRica,
	France: CountryFrance,
	Germany: CountryGermany,
	India: CountryIndia,
	Indonesia: CountryIndonesia,
	Ireland: CountryIreland,
	Italy: CountryItaly,
	Mexico: CountryMexico,
	Netherlands: CountryNetherlands,
	NewZealand: CountryNewZealand,
	Nigeria: CountryNigeria,
	Norway: CountryNorway,
	Pakistan: CountryPakistan,
	Peru: CountryPeru,
	Philippines: CountryPhilippines,
	Poland: CountryPoland,
	Russia: CountryRussia,
	Singapore: CountrySingapore,
	SouthAfrica: CountrySouthAfrica,
	SouthKorea: CountrySouthKorea,
	Spain: CountrySpain,
	Sweden: CountrySweden,
	Turkey: CountryTurkey,
	UK: CountryUK,
	US: CountryUS,
	Ukraine: CountryUkraine,
	Vietnam: CountryVietnam
};

export enum DataType {
	Alphanumeric = 'Alphanumeric',
	AutoIncrement = 'AutoIncrement',
	Boolean = 'Boolean',
	CVV = 'CVV',
	City = 'City',
	Colour = 'Colour',
	Company = 'Company',
	Computed = 'Computed',
	Constant = 'Constant',
	Country = 'Country',
	Currency = 'Currency',
	Date = 'Date',
	Email = 'Email',
	GUID = 'GUID',
	IBAN = 'IBAN',
	LatLng = 'LatLng',
	List = 'List',
	Names = 'Names',
	NormalDistribution = 'NormalDistribution',
	NumberRange = 'NumberRange',
	PAN = 'PAN',
	PIN = 'PIN',
	Phone = 'Phone',
	PostalZip = 'PostalZip',
	Region = 'Region',
	Rut = 'Rut',
	StreetAddress = 'StreetAddress',
	TextFixed = 'TextFixed',
	TextRandom = 'TextRandom',
	Time = 'Time',
	Track1 = 'Track1',
	Track2 = 'Track2',
	URLs = 'URLs',
	WeightedList = 'WeightedList'
}

export enum ExportType {
	CSV = 'CSV',
	CSharp = 'CSharp',
	HTML = 'HTML',
	JSON = 'JSON',
	Javascript = 'Javascript',
	LDIF = 'LDIF',
	PHP = 'PHP',
	Perl = 'Perl',
	Python = 'Python',
	Ruby = 'Ruby',
	SQL = 'SQL',
	Typescript = 'Typescript',
	XML = 'XML'
}

import { GenerationOptionsType as CSVGenerationOptions } from './src/plugins/exportTypes/CSV/bundle';
import { GenerationOptionsType as CSharpGenerationOptions } from './src/plugins/exportTypes/CSharp/bundle';
import { GenerationOptionsType as HTMLGenerationOptions } from './src/plugins/exportTypes/HTML/bundle';
import { GenerationOptionsType as JSONGenerationOptions } from './src/plugins/exportTypes/JSON/bundle';
import { GenerationOptionsType as JavascriptGenerationOptions } from './src/plugins/exportTypes/Javascript/bundle';
import { GenerationOptionsType as LDIFGenerationOptions } from './src/plugins/exportTypes/LDIF/bundle';
import { GenerationOptionsType as PHPGenerationOptions } from './src/plugins/exportTypes/PHP/bundle';
import { GenerationOptionsType as PerlGenerationOptions } from './src/plugins/exportTypes/Perl/bundle';
import { GenerationOptionsType as PythonGenerationOptions } from './src/plugins/exportTypes/Python/bundle';
import { GenerationOptionsType as RubyGenerationOptions } from './src/plugins/exportTypes/Ruby/bundle';
import { GenerationOptionsType as SQLGenerationOptions } from './src/plugins/exportTypes/SQL/bundle';
import { GenerationOptionsType as TypescriptGenerationOptions } from './src/plugins/exportTypes/Typescript/bundle';
import { GenerationOptionsType as XMLGenerationOptions } from './src/plugins/exportTypes/XML/bundle';

interface ExportTypeOptionsMap {
	[ExportType.CSV]: CSVGenerationOptions;
	[ExportType.CSharp]: CSharpGenerationOptions;
	[ExportType.HTML]: HTMLGenerationOptions;
	[ExportType.JSON]: JSONGenerationOptions;
	[ExportType.Javascript]: JavascriptGenerationOptions;
	[ExportType.LDIF]: LDIFGenerationOptions;
	[ExportType.PHP]: PHPGenerationOptions;
	[ExportType.Perl]: PerlGenerationOptions;
	[ExportType.Python]: PythonGenerationOptions;
	[ExportType.Ruby]: RubyGenerationOptions;
	[ExportType.SQL]: SQLGenerationOptions;
	[ExportType.Typescript]: TypescriptGenerationOptions;
	[ExportType.XML]: XMLGenerationOptions;
}

export type ExportTypeGenerationOptions = {
	[K in ExportType]: {
		plugin: K;
		settings: ExportTypeOptionsMap[K];
	}
}[ExportType];

