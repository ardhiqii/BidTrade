import { formatCurrency } from "react-native-format-currency"



function FormatCurrency(value) {
    const data = formatCurrency({amount:value,code:'IDR'})
    const splitData = data[1].split(",")
    const formatted =  splitData.join('.')
    return formatted

}

export default FormatCurrency