/*________________________TASK-1_______________________________*/

const formTask1 = document.getElementById('formTask1')

formTask1.addEventListener('submit', function(e)
{
    e.preventDefault()
    const number = document.getElementById('inputTask1').value

    let result1 = ''
    if(number.length === 0)
    {
        result =`Please enter a number.`
    }
    else if(number % 2 == 0 )
    {
        result1 =`The number ${number} is a even number.`
    }
    else
    {
        result1 =`The number ${number} is a odd number.`
    }

    let counter = 0 
    function handleClickOnBtn(e)
    {
        let newP = document.getElementById('result').textContent =''
        counter++
        if(counter > 0)
        {
           let newP = document.getElementById('result').textContent += result1
        }
    }
    
    handleClickOnBtn()

    document.getElementById('inputTask1').value = ''
    
})

/*________________________TASK-2_______________________________*/

function showNumbers()
{
    document.getElementById('result2').textContent = ''
    let resultArr = []
    for(i = 10; i < 101; i++)
    {
        if((i % 3 == 0) && (i % 2 == 0))
        {
            resultArr.push(i)
        }
    }
    document.getElementById('result2').textContent += resultArr

}

/*________________________TASK-3_______________________________*/

function checkNumbers()
{
    document.getElementById('result3').textContent = ''
    document.getElementById('result4').textContent = ''
    const formTask3 = document.getElementById('formTask3')
    let number1 = document.getElementById('number1').value
    console.log('number 1', number1)
    let number2 = document.getElementById('number2').value
    let number3 = document.getElementById('number3').value
    let numArr = [number1,number2,number3]
    let isPrimeMax = true
    let isPrimeMin = true
    let primeNumMin = ''
    let primeNumMax = ''
    
    formTask3.addEventListener('submit', function(e)
    {
        e.preventDefault()
        if((number1 <= 1)||(number2 <= 1)||(number3 <= 1))
        {
            document.getElementById('result3').textContent = 'Enter numbers larger than 1.'
            return
        }
        let maxNum = (Math.max(...numArr))
        let minNum = (Math.min(...numArr))
        for(let i = 2; i < maxNum; i++)
        {
            if(maxNum % i == 0)
            {
                isPrimeMax = false
            }
        }
        for(let i = 2; i < minNum; i++)
        {
            if(minNum % i == 0)
            {
                isPrimeMin = false
            }
        }
        if(isPrimeMax)
        {
            primeNumMax= ' a prime number'
        }
        else
        {
            primeNumMax = ' not a prime number'
        }
        if(isPrimeMin)
        {
            primeNumMin= ' a prime number'
        }
        else
        {
            primeNumMin = ' not a prime number'
        }
        
        document.getElementById('result3').textContent = `The smallest number is ${minNum} and the largest number is ${maxNum}.`
        
        document.getElementById('result4').textContent =`The smallest number ${minNum} is ${primeNumMin}, the largest number ${maxNum} is ${primeNumMax}.`

        document.getElementById('number1').value = ''
        document.getElementById('number2').value = ''
        document.getElementById('number3').value = ''
    })
}
    
