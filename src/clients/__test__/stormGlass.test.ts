import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassNormalized3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import stormGlassWeather3hoursFixture from '@test/fixtures/stormGlass_weather_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalize forecast front the StormGlass service', async () => {
    const lat = 33.792726;
    const lng = 151.289824;

    axios.get = jest.fn().mockResolvedValue(stormGlassWeather3hoursFixture);

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalized3HoursFixture);
  });
});
