# Country Codes

A simple NPM package to search for country information based on various codes and names. This package provides methods to 
search for countries by FIPS code, ISO code, internet code, and country name.

Built on Typescript for the best developer experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
  - [FIPS Codes](#fips-codes)
  - [ISO Codes](#iso-codes)
  - [Internet Codes](#internet-codes)
  - [Country Name](#country-name)
- [Response (Country)](#response-country)
- [Which code should I use?](#which-code-should-i-use)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install @apollo-tech/country-codes
```

## Usage

Import the package and use the provided methods to search for country information.

```typescript
import CountryCodes from '@apollo-tech/country-codes';

const countryCodes = new CountryCodes();

// Search for a country by FIPS code
const countryByFips = countryCodes.byFips('US');
console.log(countryByFips);

// Search for a country by ISO code
const countryByIso = countryCodes.byIso('USA');
console.log(countryByIso);

// Search for a country by internet code
const countryByInternet = countryCodes.byInternet('US');
console.log(countryByInternet);

// Search for a country by name
const countryByName = countryCodes.byCountry('United States');
console.log(countryByName);
```

## Methods

### FIPS Codes

Search for a country by FIPS code.

`byFips(code: string): CountryResponse`

### ISO Codes

Search for a country by ISO code. This method supports ISO2, ISO3, and ISO numeric codes. If you provide an invalid
ISO code type, the method will throw an error. You can enable `safeMode` to prevent the method from throwing an error
and return `null` instead.

`byIso(code: string | number, safeMode: boolean = false): CountryResponse`

### Internet Codes

Search for a country by internet code.

`byInternet(code: string): CountryResponse`

### Country Name

Search for a country by name. This method is case-sensitive by default. Enable `ignoreCase` to perform a case-insensitive search.

`byCountry(country: string, ignoreCase: boolean = false): CountryResponse`

## Response (Country)

All methods return a `CountryResponse` object which is either a `Country` object or `null`.

For simplicity of use, below is the structure of the `Country` object:

```typescript
interface Country {
  continent: string;
  region: string;
  country: string;
  capital: string;
  fips: string;
  iso2: string;
  iso3: string;
  isoNo: number;
  internet: string;
}
```

The `Country` object contains the following properties:

- `continent` - The name of the country's continent.
- `region` - The region of the country.
- `country` - The name of the country.
- `capital` - The capital of the country.
- `fips` - The FIPS code of the country.
- `iso2` - The ISO-3166-alpha-2 code of the country (2-char code, like `US`).
- `iso3` - The ISO-3166-alpha-3 code of the country (3-char code, like `USA`).
- `isoNo` - The ISO-3166-num-3 code of the country (3-digit numerical ccode, like `840`).
- `internet` - The internet code of the country (2-char code, like `US`).

## Which code should I use?

In general, if you are asked for a two-digit code, use the ISO2 code. If you are asked for a three-digit code, use the ISO3 code.

The other code types are provided, but it is likely you will know which code you need based on the context in which you are 
asked for it. It's unlikely you will need to use the FIPS code or internet code unless specifically asked for them.

## Roadmap

This package is a simple utility package and is unlikely to have any major updates. If you have any suggestions or 
feature requests, please open an issue on GitHub. That said, time permitting, we will likely add the following features:

- Continent-based searches (e.g., get all countries in Europe).
- Region-based searches (e.g., get all countries in the Middle East).
- List Continents and Regions.
- Add more country information (e.g. phone code, currency, etc.).
  - Searching by these additional fields is likely to be included.

## Versioning

This package uses [Semantic Versioning](https://semver.org/). For the versions available, see the Releases on this repository.
Due to the nature of this package, it is unlikely to have any major updates, so the versioning will likely remain at 1.x.x.

If a future utility were to be added that significantly changed the nature of the package, we would likely create a new
package with a different name to avoid complicating the existing package.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on GitHub.

For code contributions, please fork the repository and submit a pull request. Please ensure that your code is well-documented
and that you have added tests for any new features or bug fixes. While this repository does not have a strict code style guide,
you should aim to match the existing code style as closely as possible.

## License

This project is licensed under the MIT License.