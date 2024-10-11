import CountryCodes from "../src";

describe("[ --- Country Codes -- ]", function () {
    const countries = new CountryCodes();
    it("should be awesome", function () {
        expect(true).toBe(true);
    })

    describe("countryList", function () {
        it("should be an array", function () {
            expect(Array.isArray(countries.countryList)).toBe(true);
        });

        it("should have a length of 250", function () {
            expect(countries.countryList.length).toBe(250);
        });

        it("should contain countries with the correct properties", function () {
            const country = countries.countryList[0];
            expect(country).toHaveProperty("country");
            expect(country).toHaveProperty("isoNo");
            expect(country).toHaveProperty("fips");
            expect(country).toHaveProperty("internet");
            expect(country).toHaveProperty("region");
            expect(country).toHaveProperty("continent");
            expect(country).toHaveProperty("capital");
        });
    });

    describe("byFips", function () {
        it("should return the correct country", function () {
            const uk = countries.byFips("UK");
            expect(uk).toEqual({
                capital: "London",
                continent: "Europe",
                country: "United Kingdom",
                fips: "UK",
                internet: "UK",
                iso2: "GB",
                iso3: "GBR",
                isoNo: "826",
                region: "Western Europe"
            });
        });

        it("should return null if the country is not found", function () {
            const uk = countries.byFips("ZZ");
            expect(uk).toBeNull();
        });
    });

    describe("byIso", function () {
        it("should throw an error if the iso code is invalid", function (done) {
            try {
                countries.byIso("foo bar baz");
                return done("exception should be thrown");
            } catch (e) {
                return done();
            }
        });

        it("should not throw an error if the iso code is invalid with safe mode", function (done) {
            try {
                countries.byIso("foo bar baz", true);
                return done();
            } catch (e) {
                return done("exception should not be thrown");
            }
        });

        describe("([2-CHAR])", function () {
            it("should return the correct country", function () {
                const uk = countries.byIso("GB");
                expect(uk).toEqual({
                    capital: "London",
                    continent: "Europe",
                    country: "United Kingdom",
                    fips: "UK",
                    internet: "UK",
                    iso2: "GB",
                    iso3: "GBR",
                    isoNo: "826",
                    region: "Western Europe"
                });
            });

            it("should return null if the country is not found", function () {
                const uk = countries.byIso("ZZ");
                expect(uk).toBeNull();
            });
        });

        describe("([3-CHAR])", function () {
            it("should return the correct country", function () {
                const uk = countries.byIso("GBR");
                expect(uk).toEqual({
                    capital: "London",
                    continent: "Europe",
                    country: "United Kingdom",
                    fips: "UK",
                    internet: "UK",
                    iso2: "GB",
                    iso3: "GBR",
                    isoNo: "826",
                    region: "Western Europe"
                });
            });

            it("should return null if the country is not found", function () {
                const uk = countries.byIso("ZZZ");
                expect(uk).toBeNull();
            });
        });

        describe("([Number])", function () {
            it("should return the correct country when using a number", function () {
                const uk = countries.byIso(826);
                expect(uk).toEqual({
                    capital: "London",
                    continent: "Europe",
                    country: "United Kingdom",
                    fips: "UK",
                    internet: "UK",
                    iso2: "GB",
                    iso3: "GBR",
                    isoNo: "826",
                    region: "Western Europe"
                });
            });

            it("should return the correct country when using a number as a string", function () {
                const uk = countries.byIso("826");
                expect(uk).toEqual({
                    capital: "London",
                    continent: "Europe",
                    country: "United Kingdom",
                    fips: "UK",
                    internet: "UK",
                    iso2: "GB",
                    iso3: "GBR",
                    isoNo: "826",
                    region: "Western Europe"
                });
            });

            it(`should find countries with leading zeros in a string, like "050"`, function (done) {
                const bangladesh = countries.byIso("050");
                if (null == bangladesh) return done("Bangladesh not found");
                if (bangladesh.country !== "Bangladesh") return done(`${bangladesh.country} found`);

                done();
            });

            it("should return null if the country is not found", function () {
                const uk = countries.byIso(999);
                expect(uk).toBeNull();
            });
        });
    })

    describe("byInternet", function () {
        it("should return the correct country", function () {
            const uk = countries.byInternet("UK");
            expect(uk).toEqual({
                capital: "London",
                continent: "Europe",
                country: "United Kingdom",
                fips: "UK",
                internet: "UK",
                iso2: "GB",
                iso3: "GBR",
                isoNo: "826",
                region: "Western Europe"
            });
        });

        it("should return null if the country is not found", function () {
            const uk = countries.byInternet("ZZ");
            expect(uk).toBeNull();
        });
    });

    describe("byCountry", function () {
        it("should return the correct country by name", function () {
            const uk = countries.byCountry("United Kingdom");
            expect(uk).toEqual({
                capital: "London",
                continent: "Europe",
                country: "United Kingdom",
                fips: "UK",
                internet: "UK",
                iso2: "GB",
                iso3: "GBR",
                isoNo: "826",
                region: "Western Europe"
            });
        });

        it("should return the correct country when ignoring case", function (done) {
            const uk = countries.byCountry("uniTed kingDom", true);
            if (uk === null) return done("country not found");
            if (uk.country !== "United Kingdom") return done("country not found");
            done();
        });

        it("should still return null on missing countries when ignoring case", function (done) {
            const uk = countries.byCountry("uniTed kingDoMs", true);
            if (uk !== null) return done("country should be null");
            done();
        });

        it("should return null if the country is not found", function () {
            const uk = countries.byCountry("ZZ");
            expect(uk).toBeNull();
        });
    });

    describe("[ --- TODO --- ]", function () {
        it.todo("should have a method to get all countries in a region");
        it.todo("should have a method to get all countries in a continent");
        it.todo("should have a method to retrieve all continents");
        it.todo("should have a method to retrieve all regions");
        it.todo("should contain phone codes");
        it.todo("should contain currency codes");
    })

});