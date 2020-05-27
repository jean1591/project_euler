def sumFactorialDigits(n):
    return countDigitsSum(fact(n))


def fact(n):
    if n < 2:
        return 1
    elif n == 2:
        return 2
    else:
        return n * fact(n - 1)


def countDigitsSum(num):
    numberArr = list(str(num))
    print(numberArr)
    sum = 0
    for element in numberArr:
        sum += int(element)
    return sum
