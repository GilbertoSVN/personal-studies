import { Either, left, right } from "./either"

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10)
  }

  return left('error')
}

describe('Either', () => {
  it('should return success', () => {
    const result = doSomething(true)

    if (result.isRight()) {
      console.log(result.value)
    }

    expect(result.isRight()).toBe(true)
  })

  it('should return error', () => {
    const result = doSomething(false)

    expect(result.isLeft()).toBe(true)
  })
})