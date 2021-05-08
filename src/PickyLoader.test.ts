import { PickyLoader } from './index'

test('PickyLoader', () => {
  expect(PickyLoader({ sources: ['1'] })).toBe('1')
})
