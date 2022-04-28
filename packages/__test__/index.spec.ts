import type { IQAQ } from '../index'
import { QAQ, addQAQ, getQAQ, getRandomQAQ } from '../index'

describe('QAQ', () => {
  describe('getQAQ()', () => {
    it('should return all icon', () => {
      const icons = getQAQ()

      expect(icons).toEqual(QAQ)
    })

    it('should return correctly icons', () => {
      const icons = getQAQ('sadness')

      expect(icons).toEqual(QAQ.sadness)
    })
  })

  it('should xxxx', () => {
    const icons = getQAQ('angry')
    console.log(icons[1])
  })

  describe('getRandomQAQ()', () => {
    it('should return an correctly icons', () => {
      const icons = getQAQ() as IQAQ
      const icon = getRandomQAQ('happy')
      let flag = false

      icons.happy.forEach((item) => {
        if (icon[0] === item) {
          flag = true
        }
      })

      expect(flag).toBe(true)
    })
  })

  test('addQAQ', () => {
    const afterAdd = addQAQ({ key: 'angry', qaq: '2' })
    const nowQAQ = getQAQ()
    expect(afterAdd.angry.includes('2')).toBe(true)
    expect(afterAdd).toBe(nowQAQ)
  })
})
