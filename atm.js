console.log("welcome🙏in ATM service center🏧:");
const readlineSync = require("readline-sync");
var card=readlineSync.question("Insert your card💳: ");
if (card=="ATM"){
    console.log("Dont remove your card💳 before complecet transion:");
    language=readlineSync.questionInt("Select your language👉 \n 1. Engish, 2.Hindi: ");
    if (language==1){
        var pin= readlineSync.questionInt("Enter your 4 digit pin👉:");
        if (pin==2345){
            var transion=readlineSync.questionInt("Select your transion👉: \n 1.withdraw money ,2.balance enquire: ");
            if (transion==1){
                var accountType= readlineSync.questionInt("please select your account🔢: \n 1.Saving account🔢 , 2.Current account🔢: ");
                if (accountType==1){
                    var cash= readlineSync.questionInt("Enter the withdraw money💰: ");
                    if (cash%100==0){
                        if (cash<25000){
                            console.log("Please wait..... \n Your transion is processing......:\n transion sucessfully \n Please collect your money💰💰: ");
                            var recipt= readlineSync.question("do you want printed recipet: ")
                            if (recipt=="yes"){
                                console.log("Take a printed recipt:")
                                console.log("please remove your card💳:")
                        
                            }else{
                                console.log("Thank you🤝🙏🏧::")
                            }
                        }else{
                            console.log("you cant withdraw money above 25000")
                        }

                    }else{
                        console.log("YOU HAVE TO WITHDRAW MONEY DIVISABLE BY 100")
                    }
                }else if (accountType==2){
                    console.log("same process as work with saving account")

                }else{
                    console.log("Quite")
                }
            }else if(transion==2){
                console.log("you have 1 lac rupeese in your account")
            }else{
                console.log("Quite")
            }
        }else{
            console.log("please enter your correct pin")
        }
    }else if(language==2){
        var Khatakunji= readlineSync.questionInt("krpya apna khatakunji ank dale👉: ");
        if (Khatakunji==2345){
            var transion=readlineSync.questionInt("krapiya apna transion chune👉: \n 1.rakam nistaran ,2.peson ki jankari: ");
            if (transion==1){
                var KhataPrakar= readlineSync.questionInt("kripiya apna khata chune🔢: \n 1.Bachat bank khata🔢 , 2.chalu bank khata🔢: ");
                if (KhataPrakar==1){
                    var rakam= readlineSync.questionInt("krapiya nistaran rakam dale💰💰: ");
                    if (rakam%100==0){
                        if (rakam<25000){
                            console.log("krpiya intjaar kre..... \n aapki transion parkriya chal ri he......:\n transion saphal huwa \n karpiya apne pese le💰💰: ");
                            var parchi= readlineSync.question("kya aap parchi chahte he: ")
                            if (parchi=="ha"){
                                console.log("karpiya apni parchi le:")
                                console.log("karpiya apna card nikal le💳:")
                        
                            }else{
                                console.log("Dhanywaad🤝🙏::")
                            }
                        }

                    }else{
                        console.log("karpiya 25000 ke neche hi pese💰💰 nikale")
                    }
                }else if (KhataPrakar==2){
                    console.log("ak saman prkriya jesi chalu khaata ke sath thi")

                }else{
                    console.log("Bhar nikle")
                }
            }else if(transion==2){
                console.log("aapke pass aapke bank kahate me 1 lakh rupye he")
            }else{
                console.log("Bahar nikle")
            }
        }else{
            console.log("karpiya apna shi khata kunji dale")
        }
    }else{
        console.log("karpiya hindi ya angregy ka hi chunaw kre")
    }
}else{
    console.log("karpiya apna atm card💳 hi dale dusra koi or ni")
}
