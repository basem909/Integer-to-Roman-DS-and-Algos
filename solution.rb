def int_to_roman(num) 
    return 'only numbers allowed' if num =~ /\D/
    symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    multiplyer = 0
     roman = ""
     i = 0
    while  i < symbols.length
        if num % values[i] == 0
            multiplyer = num / values[i]
            
        else
            multiplyer = num / values[i]
            multiplyer.floor()
        end
        multiplyer = symbols[i] * multiplyer
        roman = roman + multiplyer;
        num = num % values[i];
        i+=1
    end
    
    
  return roman
    
end

