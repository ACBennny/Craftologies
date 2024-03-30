/*************************************************************
 * This is the script for the homepage of Blue_Stuff
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



// PRELOADER

        const preloader = document.querySelector('.preloader_class');

        const searchBtn_HomePage = document.querySelector('.search_btn');
        const opnprofLinksBtn_HomePage = document.querySelector('.open_prof_links');
        const profLinksBox_HomePage = document.querySelector('.profile_links');

        const profileWorld = document.querySelector('.profile_logo');
        const joinBtn = document.createElement('div');

        window.addEventListener('load' , () => {
            preloader.style.display = "none";
            document.body.classList.remove('off_Flow');
            document.body.classList.add('on_Flow');
        });



// RELOADING
    
    // // Warns if user tries to refresh
    //     window.addEventListener('beforeunload', function (e) {
    //         e.preventDefault(); 
    //         e.returnValue = '';
    //     });


// IMAGES 

        const getAllImages = document.querySelectorAll('img');

        getAllImages.forEach(img => {
            // Prevents them from being draggedc:\Users\abcof\OneDrive\Pictures\get_the_app_light.jpg c:\Users\abcof\OneDrive\Pictures\get_the_app._darkjpg.jpg
            img.style.userSelect = "none";
            img.draggable = false;

            // Gives the default value of "alt" to be "=> image <==" if it contains no value
            if(img.alt.valueOf() == "")
            {
                img.alt = "image";
            }

            // Prevents them from being downloaded
            img.addEventListener("mouseover" , () => {
                document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
            });
            img.addEventListener("mouseleave" , () => {
                document.oncontextmenu = document.body.oncontextmenu = function() {return true;}
            });
        });


// BODY
        const join_body = document.querySelector(".Join_BAse");
        const join_body_main = document.querySelector(".main_body");

    // Form Title

        // Slide to the active form
            const formTitleActive = document.querySelector('.join_title_bdr');
            const formTitle = document.querySelectorAll('.join_title h3');
            const radio_LogIn = document.querySelector('#join_rad1');
            const radio_SignIn = document.querySelector('#join_rad2');

            formTitle.forEach(title => {
                title.addEventListener("click" , () => {
                    if(radio_LogIn.checked == true)
                    {
                        radio_LogIn.checked = false;
                        radio_SignIn.checked = true;
                        formTitleActive.classList.add('active');
                    }
                    else
                    {
                        radio_LogIn.checked = true;
                        radio_SignIn.checked = false;
                        formTitleActive.classList.remove('active');
                    }
                });
            });


    // Form Input boxes

        // When clicked ("active"), the border-bottom changes color to signify the difference
            const formInput = document.querySelectorAll('.join_content .join_content_input');

            formInput.forEach(input => {
                input.addEventListener("click" , () => {
                    formInput.forEach(inputActive => {
                        inputActive.classList.remove('active');
                    });
                        input.classList.add('active');
                });
            });


    // Forgot Password
        // Opens the Tab e
            // const opnForgotPassBox = document.querySelector("#acc_SignIn_issue");

    
    // Account Issues

        // Opens and Closes the Account ISsues Tab
            const opnAccGuideBox = document.querySelectorAll(".acc__issue");
            const accCreationGuideBdr = document.querySelectorAll(".acc_creation_bdr");
            const accCreationGuideBcg = document.querySelectorAll(".acc_creation_bcg");
            const accCreationGuideBox = document.querySelector(".acc_creation_box");
            const accConditionsBdr = document.querySelectorAll(".acc_conditions_bdr");
            const closeHelpTab = document.querySelectorAll(".close_help_tab");
            const accCondBody = document.querySelector(".acc_conditions_bdr");

            // When i am lost
            accConditionsBdr.forEach(bdr => {
                bdr.addEventListener("mouseenter" , () => {
                    bdr.style.overflowY = "auto";
                });
                bdr.addEventListener("mouseleave" , () => {
                    bdr.style.overflowY = "hidden";
                });
            });

            // Opens the box
            function openAccIssueTab(opnbdr){
                const accCreationGuideBcg = accCreationGuideBdr[opnbdr].querySelector(".acc_creation_bcg");
                const accCreationGuideBox = accCreationGuideBdr[opnbdr].querySelector(".acc_creation_box");
                
                accCreationGuideBdr[opnbdr].classList.add("active");
                accCreationGuideBcg.classList.add("active");
                accCreationGuideBox.classList.add("active");
            }

            opnAccGuideBox.forEach((guideBox, i) => {
                guideBox.addEventListener("click" , () => {
                    openAccIssueTab(i);
                    document.body.classList.add('off_Flow');
                    document.body.classList.remove('on_Flow');
                });
            });

            // Closes the box
            function closeAccIssueTab(clsbdr){
                const accCreationGuideBcg = accCreationGuideBdr[clsbdr].querySelector(".acc_creation_bcg");
                const accCreationGuideBox = accCreationGuideBdr[clsbdr].querySelector(".acc_creation_box");
                
                accCreationGuideBdr[clsbdr].classList.remove("active");
                accCreationGuideBcg.classList.remove("active");
                accCreationGuideBox.classList.remove("active");
            }

            accCreationGuideBcg.forEach((guideBcg, i) => {
                guideBcg.addEventListener("click" , () => {
                    closeAccIssueTab(i);
                    document.body.classList.remove('off_Flow');
                    document.body.classList.add('on_Flow');
                });
            });
            

            closeHelpTab.forEach((helpTab, i) => {
                helpTab.addEventListener("click" , () => {
                    closeAccIssueTab(i);
                    document.body.classList.remove('off_Flow');
                    document.body.classList.add('on_Flow');
                });
            });
        

        // Table of Contents

        // GUides User to each section and 
        // "flashes" the background to allow user know the precise location of that section
            // For Log In Content
                const logCtnt1 = document.querySelector("#log_1");
                const logCtnt2 = document.querySelector("#log_2");
                const logCtnt3 = document.querySelector("#log_3");
                const logCtnt4 = document.querySelector("#log_4");
                const ctnt1 = document.querySelector("#sect_1");
                const ctnt2 = document.querySelector("#sect_2");
                const ctnt3 = document.querySelector("#sect_3");
                const ctnt4 = document.querySelector("#sect_4");

            // For Sign Up Content
                const signCtnt1 = document.querySelector("#sign_1");
                const signCtnt2 = document.querySelector("#sign_2");
                const signCtnt3 = document.querySelector("#sign_3");
                const signCtnt4 = document.querySelector("#sign_4");
                const signCtnt5 = document.querySelector("#sign_5");
                const ctnt5 = document.querySelector("#sect_5");
                const ctnt6 = document.querySelector("#sect_6");
                const ctnt7 = document.querySelector("#sect_7");
                const ctnt8 = document.querySelector("#sect_8");
                const ctnt9 = document.querySelector("#sect_9");

            // Scrolls to particular section
            function flashBcg(theClass)
            {
                theClass.classList.add("flash");
                setTimeout(() => theClass.classList.remove("flash") , 2000);
            }
                // For Log In Section
                    logCtnt1.addEventListener("click" , () => {
                        flashBcg(ctnt1);
                    });
                    logCtnt2.addEventListener("click" , () => {
                        flashBcg(ctnt2);
                    });
                    logCtnt3.addEventListener("click" , () => {
                        flashBcg(ctnt3);
                    });
                    logCtnt4.addEventListener("click" , () => {
                        flashBcg(ctnt4);
                    });

                // For Sign Up Section
                    signCtnt1.addEventListener("click" , () => {
                        flashBcg(ctnt5);
                    });
                    signCtnt2.addEventListener("click" , () => {
                        flashBcg(ctnt6);
                    });
                    signCtnt3.addEventListener("click" , () => {
                        flashBcg(ctnt7);
                    });
                    signCtnt4.addEventListener("click" , () => {
                        flashBcg(ctnt8);
                    });
                    signCtnt5.addEventListener("click" , () => {
                        flashBcg(ctnt9);
                    });



     // Back - To - Top - Button
        const backToTopBtn = document.querySelector('.back_to_top_btn');

        // If vertical scroll is greater than zero (0) then it appears
            accCondBody.addEventListener("scroll" , () => {

                if(accCondBody.scrollTop > 0)
                {
                    backToTopBtn.classList.add('active');
                }
                else
                {
                    backToTopBtn.classList.remove('active');
                }
            });




    // Hide link display for neatness

        const everyLink = document.querySelectorAll('a');
        everyLink.forEach(thislink => {

                //a variable to hold the original link
                    let currentLink = thislink.href;

                // this will remove the link when poitner is over the element
                    thislink.addEventListener("mouseover" , () => {

                        // Temporary removes link attributes
                            thislink.href = "";
                            thislink.removeAttribute("href");
                        
                        //  Opens the individual link in a new tab
                            thislink.addEventListener("click" , () => {
                                thislink.href = currentLink;
                            });
                    });
                
                // This will add the link when pointer is out of the element
                    thislink.addEventListener("mouseleave" , () => {
                        thislink.href = currentLink;
                    });
            });



    // Creating An Account

        // Turns off auto data input (completion, popups, e.t.c)
            const allInputFields = document.querySelectorAll('.signUp_content input');
            allInputFields.forEach(inputField => {
                // inputField.autocomplete = "off";
                // inputField.ariaAutoComplete = "none";
                // inputField.autocapitalize = "off";
                // inputField.autocorrect = "off";
                // inputField.spellCheck = false;
                // inputField.ariaHasPopup = false;
            });
        

            // Validates Input for Name

                // Conditions -
                /**
                 *  1 - Contains Only LETTERS and NUMBERS and ONE underscore
                 *  2 - Cannot contain only numbers
                 *  3 - Can ONLY start/end with a a letter NOT numbers or underscore
                 */

                    const name_Condition = new RegExp("^[a-z A-Z+-]*$");
                    let nameArray = [];
                    const newName = document.querySelector("#signUp_name");
                    const newNameWarn = document.querySelector("#signIn_name_warn");
                    
                    let isNameValid = false;

                    // Sepcifies the allowed characters for Before input
                    newName.addEventListener("beforeinput", (event) => {
                        if(event.data != null && !(name_Condition).test(event.data))
                        event.preventDefault();
                    });

                    // Validation function For "Username"
                    function validateUsername(event){
                        nameArray.push(signUp_name.value);
                        let lastNameArrayVal = nameArray.at(-1);

                        if((event.data == null) && (lastNameArrayVal.length <= 0))
                        {
                            newNameWarn.textContent = "Required";
                            isNameValid = false;
                        }
                        else
                        {
                            newNameWarn.textContent = "";
                            isNameValid = true;
                            console.log("Name bool = " + isNameValid);
                        }

                        
                    }

                    newName.addEventListener("input" , validateUsername);
                    

            // Validates Input for Password
                // Conditions -
                /**
                 *  1 - Must contain at least one of: "a-z" , "A-Z" , "0-9" , "special character"
                 *  2 - Confirm password should be the same with password
                 */

                // Allows all except spaces
                const new_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");

                let passwordArray = [];
                const newPassword = document.querySelector("#signUp_new_password");
                const newPassWarn = document.querySelector("#signIn_pass_warn");
                let isPassValid = false;

                // Sepcifies the allowed characters for Before input
                newPassword.addEventListener("beforeinput", (event) => {
                    if(event.data != null && !(new_pass_cond).test(event.data))
                    event.preventDefault();
                });

                // Validation for Password

                    function validateNewPassword(event) {
                        passwordArray.push(signUp_new_password.value);
                        let lastPassArrayVal = passwordArray.at(-1);
                        const userPass_Cond_SpecialChar = /\W/g;
                        const userPass_Cond_num = /\d/g;
                        const userPass_Cond_Lett = /[A-Z a-z]/g;

                        // Checks if there is any value int the input feild
                        if(((event.data == null) && (lastPassArrayVal.length <= 0)))
                        {
                            newPassWarn.textContent = "Required";
                            isPassValid = false;
                        }
                        // Checks if the pattern is less "8" characters and above than "100" characters
                        else if(((lastPassArrayVal.length > 0) && (lastPassArrayVal.length < 8)) || (lastPassArrayVal.length > 100))
                        {
                            newPassWarn.textContent = "Password length must be \"8\" min and \"100\" max";
                            isPassValid = false;
                        }
                        // Checks if the input fits the specified pattern
                        else if(!(lastPassArrayVal.match(userPass_Cond_SpecialChar) 
                            && lastPassArrayVal.match(userPass_Cond_Lett)
                            && lastPassArrayVal.match(userPass_Cond_num)
                        ))
                        {
                            newPassWarn.textContent = "Password must contain at least one of a letter, number, and a special character";
                            isPassValid = false;
                        }
                        // If all checks are completed then it is accepted
                        else
                        {
                            newPassWarn.textContent = "";
                            isPassValid = true;
                            console.log("Pass bool = " + isPassValid);
                        }
                    }

                    newPassword.addEventListener("input" , validateNewPassword);

                // Validation for Confirm Password
                    const confirmPassword = document.querySelector("#signUp_confirm_password");
                    const confNewPassWarn = document.querySelector("#signIn_confUser_warn");
                    let confPasswordArray = [];
                    let isConfPassValid = false;

                    confirmPassword.addEventListener("beforeinput", (event) => {
                        if(event.data != null && !(new_pass_cond).test(event.data))
                        event.preventDefault();
                    });

                    function confirmNewPass(event){
                        confPasswordArray.push(signUp_confirm_password.value);
                        let lastConfPassArrayVal = confPasswordArray.at(-1);

                        if(((event.data == null) && (lastConfPassArrayVal.length <= 0)))
                        {
                            confNewPassWarn.textContent = "Required";
                            isConfPassValid = false;
                        }
                        else if( lastConfPassArrayVal != signUp_new_password.value)
                        {
                            confNewPassWarn.textContent = "Passwords do not match";
                            isConfPassValid = false;
                        }
                        else
                        {
                            confNewPassWarn.textContent = "";
                            isConfPassValid = true;
                            console.log("ConfPass bool = " + isConfPassValid);
                        }
                    }

                    confirmPassword.addEventListener("input" , confirmNewPass);


            // Validates Input for Email
                // Conditions -
                /**
                 *  1 - Should be valid and active
                 *  2 - Will be verified before account can be created
                 *  3 - Characters allowed a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
                 */

                // Allows a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
                const new_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");

                let emailArray = [];
                const newEmail = document.querySelector("#signUp_new_email");
                const newEmailWarn = document.querySelector("#signIn_email_warn");
                let isEmailValid = false;

                newEmail.addEventListener("beforeinput", (event) => {
                    if (event.data != null && !(new_email_cond.test(event.data))) 
                        event.preventDefault();
                });

                // Validation function For "Email"
                function validateNewEmail(event){
                    emailArray.push(signUp_new_email.value);
                    let lastEmailArrayval = emailArray.at(-1);

                    let check_for_AtSign_in_Email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    // Checks if the field is empty
                    if((event.data == null) && (lastEmailArrayval.length <= 0))
                    {
                        newEmailWarn.textContent = "Required";
                        isEmailValid = false;
                    }
                    else if(!(lastEmailArrayval.match(check_for_AtSign_in_Email)))
                    {
                        newEmailWarn.textContent = "Email is invalid";
                        isEmailValid = false;
                    }
                    // // If all condition are met, the Email is valid, i.e "true";
                    else
                    {
                        newEmailWarn.textContent = "";
                        isEmailValid = true;
                        console.log("Email bool = " + isEmailValid);
                    }

                    
                }

                newEmail.addEventListener("input" , validateNewEmail);

                

            // Validates Input for Terms and conditions and Sign In Button

                // Conditions -
                /**
                 *  1 - User must correctly fill all required fields before the TandC btn is active
                 *  2 - User needs to tick for in order for sign Up btn to be active
                 */
                const check_if_FieldsAreValid = document.querySelectorAll(".checkifValid");
                const checkTandCBox = document.querySelector(".signIn_checkbox_bdr");
                const checkTandCBoxWarn = document.querySelector("#signIn_TandC_warn");
                const checkTandC = document.querySelector("#signIn_checkbox_id");
                const ourTermsBtn = document.querySelectorAll('.blue_craft_terms');

                // If user clicks on "info" icon the a new window is opened to display the terms and conditions
                    ourTermsBtn.forEach(termBtn => {
                        termBtn.addEventListener("click" , (e) => {
                            // Lets user know that they are being re-directed
                            let askToOpen = confirm("This will open our \" Terms and Conditions\" in a new tab");
                            if(askToOpen == false)
                            {
                                e.preventDefault;
                            }
                            else
                            {
                                window.open("../blue_Terms_and_Conditions/TandC.html" , "_blank");
                            }
                        });
                    });

                // Checks If user fills All input fields Correctly
                check_if_FieldsAreValid.forEach(field => {
                    field.addEventListener("mouseover" , () => {
                        // If all input fields are filled correctly, the checkbox is "active"
                        if(((isNameValid == true) && (isPassValid == true) && (isConfPassValid == true) && (isEmailValid == true)))
                        {
                            checkTandCBoxWarn.textContent = "";
                            checkTandCBox.classList.remove("active");
                            checkTandC.classList.add("active");
                            checkTandC.disabled = false;
                            console.log("Available!");

                            // Validation for Sign Up Button
                            checkTandC.addEventListener("click" , () => {
                                // If the checkbox is checked, the "Sign Up" button appears
                                if(checkTandC.checked == true)
                                {
                                    signUpBtn.classList.add("active");
                                    // signUpBtn.type = "submit";
                                }
                                // Else, the "Sign Up" is removed
                                else
                                {
                                    signUpBtn.classList.remove("active");
                                    // signUpBtn.type = "button";
                                }
                            });
                        }
                        // If not filled correctly, the signup button is removed and checkbox is inactive
                        else
                        {
                            checkTandCBoxWarn.textContent = "Please Check that all fields have been filled correctly";
                            signUpBtn.classList.remove("active");
                            // signUpBtn.type = "button";
                            checkTandC.checked = false;
                            checkTandC.disabled = true;
                            checkTandC.classList.remove("active");
                            checkTandCBox.classList.add("active");
                            console.log("Not available!");
                        }
                    });
                });

                // Checks and assigns username if less than 30 characters
                const verCodeSubTitleNAme = document.querySelector('#ver_Newuser_name');
                let checkNameBool = false;
                    function validateSignUpCreds()
                    {
                        
                        if(!((signUp_name.value.length < 1) || (signUp_name.value.length > 30)))
                        {
                            checkNameBool = true;
                            verCodeSubTitleNAme.textContent = signUp_name.value + " , you";
                        }
                        else
                        {
                            checkNameBool = false;
                            verCodeSubTitleNAme.textContent = "You";
                        }
                        verification(signUp_new_email.value);
                    }



        // LoGGING IN TO YOUR ACCOUNT

            // Validates Input for Email
                // Conditions -
                /**
                 *  1 - Should be valid and active
                 *  2 - Characters allowed a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
                 */
                // Allows a-z , A-Z , 0-9, hyphen(unltd), underscore(uLtd), period(1)
                
                const logInWarn = document.querySelector("#logIn_warn");


                const user_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");

                let useremailArray = [];
                const userEmail = document.querySelector("#logIn_email");
                let isUserEmailValid = false;

                userEmail.addEventListener("beforeinput", (event) => {
                    if (event.data != null && !(new_email_cond.test(event.data))) 
                        event.preventDefault();
                });

                // Validation function For "Email"
                function validateUserEmail(event){
                    useremailArray.push(logIn_email.value);
                    let lastEmailArrayval = useremailArray.at(-1);

                    let check_for_AtSign_in_Email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    // Checks if the field is empty
                    if((event.data == null) && (lastEmailArrayval.length <= 0))
                    {
                        // logInWarn.textContent = "Email or Password is incorrect";
                        isUserEmailValid = false;
                    }
                    // Condition for valid email
                    else if(!(lastEmailArrayval.match(check_for_AtSign_in_Email)))
                    {
                        // logInWarn.textContent = "Email or Password is incorrect";
                        isUserEmailValid = false;
                    }
                    // If all condition are met, the Email is valid, i.e "true";
                    else
                    {
                        // logInWarn.textContent = "";
                        isUserEmailValid = true;
                        console.log("Email good");
                        console.log("Email bool = " + isUserEmailValid);
                    }
                }

                userEmail.addEventListener("input" , validateUserEmail);

            // Validates Input for Password
                // Conditions -
                /**
                 *  1 - Must contain at least one of: "a-z" , "A-Z" , "0-9" , "special character"
                 *  2 - Confirm password should be the same with password
                 */

                // Allows all except spaces
                const user_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");

                let userpasswordArray = [];
                const userPassword = document.querySelector("#logIn_password");
                let isUserPassValid = false;

                // Sepcifies the allowed characters for Before input
                userPassword.addEventListener("beforeinput", (event) => {
                    if(event.data != null && !(new_pass_cond).test(event.data))
                    event.preventDefault();
                });

                // Validation for Password

                    function validateUserPassword(event) {
                        userpasswordArray.push(logIn_password.value);
                        let lastPassArrayVal = userpasswordArray.at(-1);
                        const userPass_Cond_SpecialChar = /\W/g;
                        const userPass_Cond_num = /\d/g;
                        const userPass_Cond_Lett = /[A-Z a-z]/g;

                        // Checks if there is any value int the input feild
                        if(((event.data == null) && (lastPassArrayVal.length <= 0)))
                        {
                            // logInWarn.textContent = "Email or Password is incorrect";
                            isUserPassValid = false;
                        }
                        // Checks if the pattern is less "8" characters and above than "100" characters
                        else if(((lastPassArrayVal.length > 0) && (lastPassArrayVal.length < 8)) || (lastPassArrayVal.length > 100))
                        {
                            // logInWarn.textContent = "Email or Password is incorrect";
                            isUserPassValid = false;
                        }
                        // Checks if the input fits the specified pattern
                        else if(!(lastPassArrayVal.match(userPass_Cond_SpecialChar) 
                            && lastPassArrayVal.match(userPass_Cond_Lett)
                            && lastPassArrayVal.match(userPass_Cond_num)
                        ))
                        {
                            // logInWarn.textContent = "Email or Password is incorrect";
                            isUserPassValid = false;
                        }
                        // If all checks are completed then it is accepted
                        else
                        {
                            // logInWarn.textContent = "";
                            isUserPassValid = true;
                            console.log("pass good");
                            console.log("Pass bool = " + isUserPassValid);
                        }
                    }

                    userPassword.addEventListener("input" , validateUserPassword);



            // Forgot Password
                const resetPass_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");

                let resetPassArray = [];
                const resetPass_email = document.querySelector("#resetPass_email_input");
                const resetPass_Label = document.querySelector("#submit_request_label");
                const resetPass_Send = document.querySelector("#submit_request");
                const resetPass_warn = document.querySelector("#resetPass_warn");
                let resetPass_validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                // Sepcifies the allowed characters for Before input
                resetPass_email.addEventListener("beforeinput", (event) => {
                    if(event.data != null && !(resetPass_email_cond).test(event.data))
                    event.preventDefault();
                });

                    function resetPasswordRequest(e)
                    {
                        // adds user input into array
                        resetPassArray.push(resetPass_email_input.value);
                        let lastEmailArrayval = resetPassArray.at(-1);

                        // Checks if the field is empty
                        if((e.data == null) && (lastEmailArrayval.length <= 0))
                        {
                            resetPass_warn.textContent = "Invalid Email";
                        }
                        // Condition for valid email
                        else if(!(lastEmailArrayval.match(resetPass_validEmail)))
                        {
                            resetPass_warn.textContent = "Invalid Email";
                        }
                        // If conditions are met, function is called to send the email
                        else
                        {
                            resetPass_warn.textContent = " Email is sending..";
                            console.log("Email is good");
                            emailPassLink();
                        }

                        // Generating link String Function
                        function generateRandomString() {
                            const length = 16;
                            var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                            var result = '';
                            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
                            return result;
                        }

                        // Generate a random link
                        var link_sample = generateRandomString();
                        console.log('Link redirect Sample:', link_sample);

                        // Carries out the sending of the email
                        function emailPassLink(){
                            // Gets string for link
                            let thisLinkcart1 = generateRandomString();
                            let thisLinkcart2 = generateRandomString();

                            // Email content
                            let link_part1 = thisLinkcart1;
                            let link_part2 = thisLinkcart2;
                            new_email_verBtn.value = resetPass_email_input.value;
                            new_email_verSubject.value = "Password Reset";
                            new_email_verBody.value= "This is a test (jokes) Password request for " + resetPass_email_input.value + ". Click here to reset your password " 
                            + "https://bluecraftologies.com/Join/LogIn/?=Password+Error+Req+%20%Request+Reset+Email=?%value!/" + link_part1 
                            + "/blueCrafts_Request+Error+%201%+Req+open=null?/Users/" + link_part2 + "/if+fall=open!+%call%lessChange.aspx";
                            // console.log("email val => " + new_email_verBody.value);

                            // Simulates click of button after "5" seconds
                            setTimeout(() => resetPass_Send.click() , 5000);

                            // Send Email
                            resetPass_Send.addEventListener("click" , () => {

                                // Changes sub-title to "An OTP has been sent to your email";
                                resetPass_warn.textContent = "Email has been sent";
                                console.log("Email has been sent!");

                                setTimeout(() => window.location.reload(), 10000);

                                /* ========= Code by Post Mail =========== starts ===*/
                                    // var form_id_js = "email_form";

                                    // var data_js = {
                                    //     "access_token": "0m8ikok0thqv6rtoucea493n"
                                    // };
        
                                    // var sendButton = document.getElementById("submit_request");
        
                                    // function js_send() {
                                    //     sendButton.value='Sending…';
                                    //     sendButton.disabled=true;
                                    //     var request = new XMLHttpRequest();
        
                                    //     var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
                                    //     var message = document.querySelector("#" + form_id_js + " [name='text']").value;
                                    //     data_js['subject'] = subject;
                                    //     data_js['text'] = message;
                                    //     var params = toParams(data_js);
        
                                    //     request.open("POST", "https://postmail.invotes.com/send", true);
                                    //     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
                                    //     request.send(params);
        
                                    //     return false;
                                    // }
        
                                    // sendButton.onclick = js_send();
        
                                    // function toParams(data_js) {
                                    //     var form_data = [];
                                    //     for ( var key in data_js ) {
                                    //         form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
                                    //     }
        
                                    //     return form_data.join("&");
                                    // }
        
                                    // var js_form = document.getElementById(form_id_js);
                                    // js_form.addEventListener("submit", function (e) {
                                    //     e.preventDefault();
                                    // });
                                /* ========= Code by Post Mail =========== ends ==*/
                                /* ===== ==> Visit https://postmail.invotes.com <== testing only! === */
                            });
                        }
                    }

                    // Calls function to validate and send reset password link
                    resetPass_Label.addEventListener("click" , resetPasswordRequest);
            

            //  Validate Log in details

                let testLog_user = "testuser";
                let testLog_email = "craft.testuser.Acc.email@gmail.com";
                let testLog_pass = "@abcd=1234";

                // Checks if user's input is valid and if the inputted values correct
                function validateLogInCreds()
                {
                    // This occurs if user's input is valid and the inputted values are correct
                    if(((isUserEmailValid == true) && (isUserPassValid == true) && (logIn_email.value == testLog_email.valueOf()) && (logIn_password.value == testLog_pass.valueOf())))
                    {
                        logInWarn.textContent = "";
                        setTimeout(verification, 2500);
                        console.log("Logged In ✊");
                    }
                    // If it is not correct, the user is required to try again
                    else
                    {
                        logInWarn.textContent = "Email or Password is incorrect";
                        verCodeSubTitleNAme.textContent = "You";
                    }
                }






            // Verification function

                    // function verification()
                    // {
                    //     // Verification Popup modal
                    //     const verCodeBdr = document.querySelector(".vercode_bdr");
                    //     const verCodeBox_loader = verCodeBdr.querySelector(".ver_loader");
                    //     const ver_loader_note_ctnt = verCodeBox_loader.querySelector("#loader_ctnt");
                    //     const close_verCodeBdr = verCodeBdr.querySelector(".gen_Style");
                    //     const sendVerCode = verCodeBdr.querySelector(".ver_req_box #submit_form");
                    //     const valVerCode = verCodeBdr.querySelector(".ver_req_box #submit_verCode");
                    //     const reqVerCode = verCodeBdr.querySelector(".ver_req_box #request_verCode");
                    //     const verCodeBox = verCodeBdr.querySelector('.ask_for_ver');
                    //     const verCodeTitle = verCodeBox.querySelector('.ask_for_ver h4');
                    //     const verCodeSubTitle = verCodeBox.querySelector('.ask_for_ver p');
                    //     const verCodeSubTitleNAme = verCodeSubTitle.querySelector('#ver_Newuser_name');
                    //     const verCodeSubTitleCtnt = verCodeSubTitle.querySelector('#ver_sub_title');
                    //     const enterOtp = verCodeBdr.querySelector(".typeincode");
                    //     const enterOtpInput = enterOtp.querySelector("#input_verCode");
                    //     const verCodeTimer = enterOtp.querySelector('p #time_countdown');
                    //     let timer;

                    //     // Preloader
                    //     ver_loader_note_ctnt.draggable = false;

                    //     // if box is closed , it opens
                    //     if(!(verCodeBdr.classList.contains("active")))
                    //     {
                    //         document.body.classList.add('off_Flow');
                    //         document.body.classList.remove('on_Flow');
                    //         verCodeBdr.classList.add("active");
                    //         verCodeBox_loader.classList.add("active");
                    //         verCodeLoader();
                    //         emailVerCode();

                    //     }

                    //     // Closes the verification box
                    //     close_verCodeBdr.addEventListener("click" , (e) => {
                    //         let warn_to_close = confirm(" As per privacy policies, closing the form will reload the current page. \n Any unsaved changes will be lost.");
                    //         if((warn_to_close == false))
                    //         {
                    //             e.preventDefault();
                    //         }
                    //         else
                    //         {
                    //             window.location.reload();
                    //         }
                    //     });


                    //     // Removes preloader after "5" seconds
                    //     function verCodeLoader(){
                    //         verCodeBox_loader.classList.add("active");
                    //         if((verCodeBox_loader.classList.contains("active")))
                    //         {
                    //             setTimeout(() => verCodeBox_loader.classList.remove("active") , 5000);
                    //         }
                    //     }
                            
                    //     //  Generating OTP String
                    //         function generateRandomString() {
                    //             const length = 32
                    //             var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ()|\"@#$%&*^&!~`/;:<>[{]}-+=?';
                    //             var result = '';
                    //             for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
                    //             return result;
                    //         }

                    //         var secret = generateRandomString(32); // Generate a random secret key
                    //         console.log('Secret key:', secret);

                        
                    //     // Generate OTP num
                    //     function generateOTP () {
                
                    //         const len = 8;
                    //             let otp = '';
                    //             const digits = '0123456789';
                    //                 for (let i = 0; i < len; i++) {
                    //                     otp += digits[Math.floor(Math.random() * 10)];
                    //                 }
                    //                 return otp;
                    //     }
                        
                    //     // Carries the sending of email
                    //     function emailVerCode(){
                    //         // Gets code
                    //         // let thisVercart = generateRandomString();
                    //         let thisVercart = generateOTP();
                    //         console.log(" val => " + thisVercart);
                            
                    //         // Stores user input for code
                    //         let enterCodeArray = [];

                    //         // Countdown timer for verification code
                    //         const timePeriod = 300;

                    //         function verTimer() {
                    //             let sec = timePeriod;
                    //             timer = setInterval(function(){
                    //                 sec--;

                    //                 // Displays timer in page
                    //                 verCodeTimer.textContent = sec;
                                    
                    //                 // Once timer hits "0" , a notification is diplayed and field for vercode is closed. User would need to request a new one
                    //                 if (sec <= 0) {
                    //                     clearInterval(timer);
                    //                     if((checkNameBool == true))
                    //                     {
                    //                         verCodeSubTitleCtnt.textContent = ", your code has expired. You need to request a new one";
                    //                     }
                    //                     else
                    //                     {
                    //                         verCodeSubTitleCtnt.textContent = "Your code has expired. You will need to request a new one";
                    //                     }
                    //                     enterOtp.classList.remove("active");
                    //                     valVerCode.classList.add("hideBtn");
                    //                     reqVerCode.classList.remove("hideBtn");
                    //                     verCodeTimer.textContent = "30";
                    //                 }
                    //             }, 1000);
                    //         }

                    //         // Email content
                    //         let currVerC = thisVercart;
                    //         console.log("email val => " + currVerC);
                    //         new_email_verBtn.value = signUp_new_email.value;
                    //         new_email_verSubject.value = "Account Creation";
                    //         new_email_verBody.value= "This is a OTP request for " + newName.value + ". Your OTP is " + currVerC +" . Please do not share this code with anyone.";

                    //         // Makes send button active
                    //         if((sendVerCode.classList.contains("hideBtn")))
                    //         {
                    //             sendVerCode.classList.remove("hideBtn");
                    //             reqVerCode.classList.add("hideBtn");
                    //         }

                    //         // Send Email
                    //         sendVerCode.addEventListener("click" , () => {

                    //             /* ========= Code by Post Mail =========== starts ===*/
                    //                 // var form_id_js = "email_form";

                    //                 // var data_js = {
                    //                 //     "access_token": "0m8ikok0thqv6rtoucea493n"
                    //                 // };
        
                    //                 // var sendButton = document.getElementById("submit_form");
        
                    //                 // function js_send() {
                    //                 //     sendButton.value='Sending…';
                    //                 //     sendButton.disabled=true;
                    //                 //     var request = new XMLHttpRequest();
        
                    //                 //     var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
                    //                 //     var message = document.querySelector("#" + form_id_js + " [name='text']").value;
                    //                 //     data_js['subject'] = subject;
                    //                 //     data_js['text'] = message;
                    //                 //     var params = toParams(data_js);
        
                    //                 //     request.open("POST", "https://postmail.invotes.com/send", true);
                    //                 //     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
                    //                 //     request.send(params);
        
                    //                 //     return false;
                    //                 // }
        
                    //                 // sendButton.onclick = js_send();
        
                    //                 // function toParams(data_js) {
                    //                 //     var form_data = [];
                    //                 //     for ( var key in data_js ) {
                    //                 //         form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
                    //                 //     }
        
                    //                 //     return form_data.join("&");
                    //                 // }
        
                    //                 // var js_form = document.getElementById(form_id_js);
                    //                 // js_form.addEventListener("submit", function (e) {
                    //                 //     e.preventDefault();
                    //                 // });
                    //             /* ========= Code by Post Mail =========== ends ==*/
                    //             /* ===== ==> Visit https://postmail.invotes.com <== testing only! === */
                                
                    //             // Removes an submit button and Replaces with validation button
                    //             sendVerCode.classList.add("hideBtn");
                    //             valVerCode.classList.remove("hideBtn");

                    //             // Changes sub-title to "An OTP has been sent to your email";
                    //             verCodeBox_loader.classList.add("active") 
                    //             if((verCodeBox_loader.classList.contains("active")))
                    //             {
                    //                 let loadtimeVerSuccess = 10;
                    //                 let sec = loadtimeVerSuccess;
                    //                 let verSuccesstimer = setInterval(
                    //                     function (){
                    //                         sec--;
                    //                         if(sec == 9)
                    //                         {
                    //                             ver_loader_note_ctnt.textContent = "Generating code";
                    //                         }
                    //                         if(sec == 4)
                    //                         {
                    //                             ver_loader_note_ctnt.textContent = "Sending Code";
                    //                         }
                    //                         if(sec == 1)
                    //                         {
                    //                             ver_loader_note_ctnt.textContent = "Success";
                    //                         }
                    //                         if(sec == 0)
                    //                         {
                    //                             clearInterval(verSuccesstimer);
                    //                             verCodeBox_loader.classList.remove("active");
                    //                             verCodeTitle.textContent = "Verification";
                    //                             if((checkNameBool == true))
                    //                             {
                    //                                 verCodeSubTitleNAme.textContent = newName.value;
                    //                                 verCodeSubTitleCtnt.textContent = ", an OTP has been sent to your email";
                    //                             }
                    //                             else
                    //                             {
                    //                                 verCodeSubTitleNAme.textContent = "";
                    //                                 verCodeSubTitleCtnt.textContent = "An OTP has been sent to your email";
                    //                             }
                    //                             // Starts timer
                    //                             verTimer();
                    //                         }
                    //                     }
                    //                 , 1000);

                    //                 // Activates Input field for Code
                    //                 enterOtp.classList.add("active");
                    //             }
                    //         });

                            
                    //         // VALIDATING CODE
                    //             // Array to store wrong values
                    //             const invalidVerArray = [];

                    //             // Conditon for input - Allows only numbers
                    //             const enterOtp_Condition = new RegExp("^[a-zA-Z0-9]*$");
                    //             enterOtpInput.ariaAutoComplete = "none";
                    //             enterOtpInput.autoComplete = "off";
                    //             enterOtpInput.autoCapitalize = "off";
                    //             enterOtpInput.autoCorrect = "off";
                    //             enterOtpInput.spellCheck = false;
                    //             enterOtpInput.ariaHasPopup = false;

                    //             enterOtpInput.addEventListener("beforeinput", (event) => {
                    //                 if (event.data != null && !(enterOtp_Condition.test(event.data))) 
                    //                     event.preventDefault();
                    //             });

                    //             // Stores user input in an array
                    //             enterOtpInput.addEventListener("input" , () => {
                    //                 enterCodeArray.push(input_verCode.value);
                    //                 let lastEnterCodeArrayVal = enterCodeArray.at(-1);
                    //                 console.log("ver code inputs => " + enterCodeArray);
                    //                 console.log("last entered value => " + lastEnterCodeArrayVal);
                    //             });

                    //             // Click to Validate
                    //             valVerCode.addEventListener("click" , () => {
                    //                 // Gets last value in array
                    //                 let lastEnterCodeArrayVal = enterCodeArray.at(-1);
                    //                 // Assigns last value to avraible
                    //                 let currValue = lastEnterCodeArrayVal;
                    //                 // Makes preloader active
                    //                 verCodeBox_loader.classList.add("active");
                    //                 // Changes text Note on preloader to "verifying"
                    //                 ver_loader_note_ctnt.textContent = "Verifying";

                    //                 // Compares value inputed after 2.5 seconds
                    //                 setTimeout(()=> 
                    //                 {
                    //                     // If user's inputeed is correct, this occurs
                    //                     if(currValue == thisVercart)
                    //                     {
                    //                         // Clerars timer
                    //                         clearInterval(timer);

                    //                         // Sequence of messages displayed at differnet points ove a second period before is redirected to homepage
                    //                         setTimeout(
                    //                             function()
                    //                             {
                    //                                 let loadtimeVerSuccess = 20;
                    //                                 let seconds = loadtimeVerSuccess;
                    //                                 let verSuccesstimer = setInterval(
                    //                                     function (){
                    //                                         seconds--;
                    //                                         if(seconds == 19)
                    //                                         {
                    //                                             ver_loader_note_ctnt.textContent = "Verified";
                    //                                         }
                    //                                         if(seconds == 17)
                    //                                         {
                    //                                             ver_loader_note_ctnt.textContent = "Creating Account";
                    //                                         }
                    //                                         if(seconds == 7)
                    //                                         {
                    //                                             ver_loader_note_ctnt.textContent = "Account Created";
                    //                                         }
                    //                                         if(seconds == 5)
                    //                                         {
                    //                                             ver_loader_note_ctnt.textContent = "Redirecting";
                    //                                         }
                    //                                         if(seconds == 0)
                    //                                         {
                    //                                             clearInterval(verSuccesstimer);
                    //                                             join_body.removeChild(join_body_main);
                    //                                             preloader.style.display = "flex";
                    //                                             setTimeout(() => window.location.pathname = "../../blue_home/Home.html" , 3000);
                    //                                         }
                    //                                     }
                    //                                 , 1000);
                    //                             }
                    //                         ,2500);
                    //                     }
                    //                     // If User makes more than three (3) wrong attempts this occurs
                    //                     else if(invalidVerArray.length > 3)
                    //                     {
                    //                         // Clears timer
                    //                         clearInterval(timer);
                    //                         // Makes preloader text note to ""
                    //                         ver_loader_note_ctnt.textContent = "";
                    //                         // Checks if user's name is less than 30
                    //                         if((checkNameBool == true))
                    //                         {
                    //                             // If it is <30 the subtitle ctnt is changed to this
                    //                             verCodeSubTitleCtnt.textContent = ", you have made too many incorrect attempts";
                    //                         }
                    //                         else
                    //                         {
                    //                             // If it is not , the subtitle ctnt is changed to this
                    //                             verCodeSubTitleCtnt.textContent = "You have made too many incorrect attempts";
                    //                         }
                    //                         // The input field for user ver code is hidden
                    //                         enterOtp.classList.remove("active");
                    //                         // The try again button is made active
                    //                         valVerCode.classList.add("hideBtn");
                    //                         // The verify button is hidden
                    //                         reqVerCode.classList.remove("hideBtn");
                    //                         // Showing this in console for test purposes
                    //                         // console.log("too many tries");
                    //                         // Removes preloader after 2.5seconds
                    //                         setTimeout(() => verCodeBox_loader.classList.remove("active") , 2500);
                    //                     }
                    //                     // If user's input is incorrect, this occurs
                    //                     else
                    //                     {
                    //                         // Sets preloader text note to "invalid code"
                    //                         ver_loader_note_ctnt.textContent = "Invalid Code";
                    //                         // Adds the user input into the invalid array
                    //                         invalidVerArray.push(input_verCode.value);
                    //                         // Shows result for testing
                    //                         console.log("Invalid codes : " + invalidVerArray);
                    //                         // Removes preloader after 2.5seconds
                    //                         setTimeout(() => verCodeBox_loader.classList.remove("active") , 2500);
                    //                     }
                    //                 },2500);
                    //             });
                    //     }

                    //     // Requesting new code
                    //         reqVerCode.addEventListener("click" , emailVerCode);
                        
                    // }
            
            // This will open the verification popup so user can be verified
                const signUpBtn = document.querySelector("#signUp_btn");
                const logInBtn = document.querySelector("#logIn_btn");
                
                signUpBtn.addEventListener("click" , validateSignUpCreds);
                logInBtn.addEventListener("click" , validateLogInCreds);
                    



          







/****************************************************
 * 
 *  LOG (date : january 3, 2024)
 *  Happy New Year
 * 
 ***************************************************/






                    