import FontSize from '../FontSize';

it('tests snapshot of fontsizes', () => {
  expect(FontSize).toMatchSnapshot();
});
