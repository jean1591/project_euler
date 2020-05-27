def powerDigitSum(exponent):
    result = 0

    numberStr = str(2**exponent)
    for i in numberStr:
        result += int(i)

    return result
