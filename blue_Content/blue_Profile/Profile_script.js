/*************************************************************
 * This is the script for the homepage of Blue_Stuff
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/


    let profileMain = document.querySelector(".profile_main");
    const changePfp = document.querySelector('.profile_img_edit_btn');
    const mainpic = document.querySelector('.profile_img .image');
    const quickViewName = document.querySelector("#profile_name_quick");
    const quickViewEmail = document.querySelector("#profile_email_quick");
    const quickViewNumber = document.querySelector("#profile_number_quick");
    const quickViewAddress = document.querySelector("#profile_address_quick");
    const opnQuickdet = document.querySelector(".open_quickView");
    const clsQuickdet = document.querySelector(".close_quickView");
    const balShow = document.querySelector("#profile_Ewallet_show");
    const balHide = document.querySelector("#profile_Ewallet_hide");
    let fstpic = document.querySelector('#profile_img_input');
    const removepfp = document.querySelector(".remove_pfp");
    const profileBox = document.querySelector(".profile_box");
    const hideProfileMain = document.querySelector(".hide_profileMain");
    const showHideBal = document.querySelector(".show_bal");
    const profileCtnt = document.querySelector('.profile_content');
    const opnSection = document.querySelectorAll('.option_click');
    const optSection = document.querySelectorAll('.option_section');
    const clsSection = document.querySelectorAll('.close_section');
    const editBdr = document.querySelectorAll('.edit_info_bdr');
    const allInfoSection = document.querySelectorAll('.profile_option .info_section');
    const personalInfoSection = document.querySelectorAll('.personal_info_box .info_section');
    const openEditbtn = document.querySelectorAll('.info_edit_btn');
    const closeEditBtn = document.querySelectorAll('.pInfoCancel');
    const allInputInPersInfo = document.querySelectorAll('.personal_info_main .edit_input_field');
    const allWarnInPersInfo = document.querySelectorAll('.personal_info_main .warn_text');
    const allActionBtnsInPersInfo = document.querySelectorAll('.personal_info_main .edit_btn');
    const profileName = document.querySelector('#profile_name');
    const profileNameInput = document.querySelector('#edit_name_field');
    const updateProfileName = document.querySelector('#update_profile_name');
    const profileEmail = document.querySelector('#profile_email');
    const newProfileEmailInput = document.querySelector('#edit_email_field_new');
    const confirmNewprofileEmailInput = document.querySelector('#edit_email_field_confirm');
    const confirmPassForNewEmailInput = document.querySelector('#edit_email_field_pass');
    const updateProfileEmail = document.querySelector('#update_profile_email');
    const profilePhoneNo = document.querySelector('#profile_phoneNo');
    const profilePhoneNoInput = document.querySelector('#edit_phoneNo_field');
    const updateprofilePhoneNo = document.querySelector('#update_profile_phoneNo');
    const currentProfilePassinput = document.querySelector('#edit_pass_field_current');
    const newProfilePassInput = document.querySelector('#edit_pass_field_new');
    const confirmNewProfilePassInput = document.querySelector('#edit_pass_field_confirm');
    const updateProfilePass = document.querySelector('#update_profile_pass');
    const newNameWarn = document.querySelector('.new_name_warn');
    const newEmailWarn = document.querySelector('.new_email_warn');
    const newEmailConfirmWarn = document.querySelector('.new_email_confirm_warn');
    const newEmailPassWarn = document.querySelector('.new_email_pass_warn');
    const newPhoneNoWarn = document.querySelector('.new_phoneNo_pass_warn');
    const currPassWarn = document.querySelector('.curr_pass_warn');
    const newPassWarn = document.querySelector('.new_pass_warn');
    const newPassConfirmWarn = document.querySelector('.new_pass_confirm_warn');
    const name_Condition = new RegExp("^[a-z A-Z+-]*$");
    let nameArray = [];
    let isNameValid = false;
    const new_email_cond = new RegExp("^[A-Za-z0-9@.%_+-]*$");
    let emailArray = [];
    const newEmail = document.querySelector("#signUp_new_email");
    let isEmailValid = false;
    let confEmailArray = [];
    let isConfEmailValid = false;
    let confPassForNewEmailArray = [];
    const user_phoneNo_cond = new RegExp("^[0-9@#*_+-~)(]");
    let isPhoneNoValid = false;
    let phoneNoArray = [];
    let isPassForNewEmail = false;
    const user_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");
    let userpasswordArray = [];
    let isUserPassValid = false;
    const new_pass_cond = new RegExp("^[A-Za-z0-9!@#$%^&*_+-~`)(></\"?|]");
    let passwordArray = [];
    let isNewPassValid = false;
    let confPasswordArray = [];
    let isConfPassValid = false;
    const preferenceBox = document.querySelectorAll('.preference_box');
    const prefSectionBdr = document.querySelectorAll('.pref_sect_bdr');
    const opnPrefSection = document.querySelectorAll('.preference_box .pref_btn');
    const clsPrefSection = document.querySelectorAll('.save_preferences .save_preferences_btn');
    const prefInputCheckbox = document.querySelectorAll('.check_bdr .check_box');
    const prefInputCheckboxHidden = document.querySelectorAll('.check_bdr .check_box_hidden');
    const goToMembPage = document.querySelector('.redirect_to_membership');
    const opnAddNewFormBdr = document.querySelectorAll('.add_new_box');
    const addNewFormBdr = document.querySelectorAll('.new_form_bdr');
    const clsAddNewFormBdr = document.querySelectorAll('.new_form_bdr .form_sect .close_Add_new_form_bdr');
    const addNewFormFields = document.querySelectorAll('.new_form_bdr .form_sect .edit_input_field');
    // const profilePass = document.querySelectorAll('#profile_password');
    // const profilePass = document.querySelectorAll('#profile_password');
    // const profilePass = document.querySelectorAll('#profile_password');
    // const profilePass = document.querySelectorAll('#profile_password');
    // const profilePass = document.querySelectorAll('#profile_password');
    // const profilePass = document.querySelectorAll('#profile_password');
    // const profilePass = document.querySelectorAll('#profile_password');
    // const profilePass = document.querySelectorAll('#profile_password');
    // const profilePass = document.querySelectorAll('#profile_password');
    // const profilePass = document.querySelectorAll('#profile_password');
    // const profilePass = document.querySelectorAll('#profile_password');



    // This will allow the user to user to change their user picture

        // This will incur the change of the picture
        fstpic.addEventListener('change' , () => {
            mainpic.src = URL.createObjectURL(fstpic.files[0]);
        });

        //This will remove the current picture and revert to default
        removepfp.addEventListener('click' , () => {
            mainpic.src = "../../blue_Img_Main/profile_1.jpg";
        });


        // Expands/Contracts the quick details box
            // opens
            function expandQuickView()
            {
                profileBox.classList.add("active");
            }
            
            // Closes
            function contractQuickView()
            {
                profileBox.classList.remove("active");
            }

            opnQuickdet.addEventListener("click" , expandQuickView);
            clsQuickdet.addEventListener("click" , contractQuickView);
            hideProfileMain.addEventListener("click" , contractQuickView);



    // This will show the amount in the user's E-Wallet

        showHideBal.addEventListener("click" , () => {
            if(showHideBal.classList.contains("fa-eye-slash"))
            {
                showHideBal.classList.replace("fa-eye-slash" , "fa-eye");
                balShow.classList.remove("active");
                balHide.classList.add("active");
                return;
            }
            showHideBal.classList.replace("fa-eye" , "fa-eye-slash");
            balShow.classList.add("active");
            balHide.classList.remove("active");
        });


    // PROFILE MAIN

        // This will open the different sections

            //opening the popup
            let showSection = function(sectionOpn)
            {
                profileMain.scrollTo(0 , 0);
                optSection[sectionOpn].classList.add('active');
                profileCtnt.classList.add("hideCtnt");
            }

            // closes popup
            let hideSection = function(sectionCls){
                profileMain.scrollTo(0 , 0);
                optSection[sectionCls].classList.remove('active');
                profileCtnt.classList.remove("hideCtnt");
                document.querySelectorAll("input:not([type='button'])").forEach((field) => {
                    field.value = "";
                });
            }

            opnSection.forEach((btn, i) => {
                btn.addEventListener("click" , () => {
                    showSection(i);
                });
            });

            //this will close the popup
            clsSection.forEach((btn, i) => {
                btn.addEventListener("click" , () => {
                    hideSection(i);
                });
            });


        // PERSONAL INFO SECTION

            // Sets the quick view details to the details of the personal info section
            quickViewName.textContent = profileName.textContent;
            quickViewEmail.textContent = profileEmail.textContent;
            quickViewNumber.textContent = profileName.textContent;

            // Static Password for test
            const staticUserpass = "00fff0f";

            // This will open the different edit boxes

                // opening the popup
                let opnEdit = function(editOpn){
                    const theInputInPersInfo = editBdr[editOpn].querySelectorAll('.edit_info_box .edit_input_field');
                    const theWarnInPersInfo = editBdr[editOpn].querySelectorAll('.edit_info_box .warn_text');
                    const theActionBtnsInPersInfo = editBdr[editOpn].querySelectorAll('.edit_info_box .edit_btn');

                    theInputInPersInfo.forEach(field => {
                        field.value = "";
                        field.disabled = false;
                    });
                    theWarnInPersInfo.forEach(warn => {
                        warn.textContent = "";
                    });
                    theActionBtnsInPersInfo.forEach(btn => {
                        btn.disabled = false;
                    });
                    
                    editBdr[editOpn].classList.add('active');

                    personalInfoSection.forEach(section => {
                        section.classList.add("hide");
                    });
                }

                // closes popup
                function disableActions()
                {
                    allActionBtnsInPersInfo.forEach(btn => {
                        btn.disabled = true;
                    });
                    allInputInPersInfo.forEach(field => {
                        field.value = "";
                        field.disabled = true;
                    });
                    allWarnInPersInfo.forEach(warn => {
                        warn.textContent = "";
                    });
                    quickViewName.textContent = profileName.textContent;
                    editBdr.forEach(bdr => {
                        bdr.classList.remove("active");
                    });
                    personalInfoSection.forEach(section => {
                        section.classList.remove("hide");
                    });
                }

                openEditbtn.forEach((btn, i) => {
                    btn.addEventListener("click" , () => {
                        opnEdit(i);
                    });
                });
                
                closeEditBtn.forEach((btn, i) => {
                    btn.addEventListener("click" , disableActions);
                });


            // Update Profile Name

                // Sepcifies the allowed characters for Before input
                profileNameInput.addEventListener("beforeinput", (event) => {
                    if(event.data != null && !(name_Condition).test(event.data))
                    event.preventDefault();
                });

                // Validation function For "Name"
                function validateUsername(event){
                    nameArray.push(profileNameInput.value);
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

                profileNameInput.addEventListener("input" , validateUsername);

                updateProfileName.addEventListener("click" , () => {
                    if(!(isNameValid == true))
                    {
                        alert("Please check that all fields have been filled correctly");
                        return;
                    }
                    profileName.textContent = profileNameInput.value;
                    disableActions();
                });


            // Update profile Email

                newProfileEmailInput.addEventListener("beforeinput", (event) => {
                    if (event.data != null && !(new_email_cond.test(event.data))) 
                        event.preventDefault();
                });

                // Validation function For "Email"
                    function validateNewEmail(event){
                        emailArray.push(newProfileEmailInput.value);
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

                    newProfileEmailInput.addEventListener("input" , validateNewEmail);

                // Validation for confirm email
                    confirmNewprofileEmailInput.addEventListener("beforeinput", (event) => {
                        if(event.data != null && !(new_email_cond).test(event.data))
                        event.preventDefault();
                    });

                    function confirmNewEmail(event){
                        confEmailArray.push(confirmNewprofileEmailInput.value);
                        let lastConfEmailArrayVal = confEmailArray.at(-1);

                        if(((event.data == null) && (lastConfEmailArrayVal.length <= 0)))
                        {
                            newEmailConfirmWarn.textContent = "Required";
                            isConfEmailValid = false;
                        }
                        else if( lastConfEmailArrayVal != newProfileEmailInput.value)
                        {
                            newEmailConfirmWarn.textContent = "Emails do not match";
                            isConfEmailValid = false;
                        }
                        else
                        {
                            newEmailConfirmWarn.textContent = "";
                            isConfEmailValid = true;
                        }
                    }

                    confirmNewprofileEmailInput.addEventListener("input" , confirmNewEmail);

                // Validating Password for New Email
                    function validatePassForNewEmail(event) {
                        confPassForNewEmailArray.push(confirmPassForNewEmailInput.value);
                        let lastEmailArrayVal = confPassForNewEmailArray.at(-1);

                        // Checks if there is any value int the input feild
                        if(((event.data == null) && (lastEmailArrayVal.length <= 0)))
                        {
                            newEmailPassWarn.textContent = "Required";
                            isPassForNewEmail = false;
                        }
                        else if(confirmPassForNewEmailInput.value != staticUserpass.valueOf())
                        {
                            newEmailPassWarn.textContent = "Password is incorrect";
                            isPassForNewEmail = false;
                        }
                        else
                        {
                            newEmailPassWarn.textContent = "";
                            isPassForNewEmail = true;
                        }
                    }

                    confirmPassForNewEmailInput.addEventListener("input" , validatePassForNewEmail);

                // Update Button
                    updateProfileEmail.addEventListener("click" , () => {
                        if(!((isEmailValid == true) && (isConfEmailValid == true) && (isPassForNewEmail == true)))
                        {
                            alert("Please check that all fields have been filled correctly");
                            return;
                        }
                        profileEmail.textContent = confirmNewprofileEmailInput.value;
                        quickViewEmail.textContent = profileEmail.textContent;
                        disableActions();
                    });


            // Update Phone Number
                profilePhoneNoInput.addEventListener("beforeinput", (event) => {
                    if(event.data != null && !(user_phoneNo_cond).test(event.data))
                    event.preventDefault();
                });

                // Validates Phone No
                    function validateNewPhoneNo(event){
                        phoneNoArray.push(profilePhoneNoInput.value);
                        let lastConfPassArrayVal = phoneNoArray.at(-1);

                        if(((event.data == null) && (lastConfPassArrayVal.length <= 0)))
                        {
                            newPhoneNoWarn.textContent = "Required";
                            isPhoneNoValid = false;
                        }
                        else if(lastConfPassArrayVal.length < 10)
                        {
                            newPhoneNoWarn.textContent = "Invalid number";
                            isPhoneNoValid = false;
                        }
                        else
                        {
                            newPhoneNoWarn.textContent = "";
                            isPhoneNoValid = true;
                        }
                    }

                    profilePhoneNoInput.addEventListener("input" , validateNewPhoneNo);

                // Update button
                    updateprofilePhoneNo.addEventListener("click" , () => {
                        if(!((isPhoneNoValid == true)))
                        {
                            alert("Please check that all fields have been filled correctly");
                            return;
                        }
                        profilePhoneNo.textContent = profilePhoneNoInput.value;
                        quickViewNumber.textContent = profilePhoneNo.textContent;
                        disableActions();
                    });



            // Update Profile Password

                // Sepcifies the allowed characters for Before input
                currentProfilePassinput.addEventListener("beforeinput", (event) => {
                    if(event.data != null && !(new_pass_cond).test(event.data))
                    event.preventDefault();
                });

                // Validation for Password
                    function validateUserPassword(event) {
                        userpasswordArray.push(currentProfilePassinput.value);
                        let lastPassArrayVal = userpasswordArray.at(-1);

                        // Checks if there is any value int the input feild
                        if(((event.data == null) && (lastPassArrayVal.length <= 0)))
                        {
                            currPassWarn.textContent = "Required";
                            isUserPassValid = false;
                        }
                        else if(currentProfilePassinput.value != staticUserpass.valueOf())
                        {
                            currPassWarn.textContent = "Password is incorrect";
                            isUserPassValid = false;
                        }
                        else
                        {
                            currPassWarn.textContent = "";
                            isUserPassValid = true;
                        }
                    }

                    currentProfilePassinput.addEventListener("input" , validateUserPassword);
                    

                // Validation for New Password

                    // Sepcifies the allowed characters for Before input
                    newProfilePassInput.addEventListener("beforeinput", (event) => {
                        if(event.data != null && !(new_pass_cond).test(event.data))
                        event.preventDefault();
                    });

                    function validateNewPassword(event) {
                        passwordArray.push(newProfilePassInput.value);
                        let lastPassArrayVal = passwordArray.at(-1);
                        const userPass_Cond_SpecialChar = /\W/g;
                        const userPass_Cond_num = /\d/g;
                        const userPass_Cond_Lett = /[A-Z a-z]/g;

                        // Checks if there is any value int the input feild
                        if(((event.data == null) && (lastPassArrayVal.length <= 0)))
                        {
                            newPassWarn.textContent = "Required";
                            isNewPassValid = false;
                        }
                        // Checks if the pattern is less "8" characters and above than "100" characters
                        else if(((lastPassArrayVal.length > 0) && (lastPassArrayVal.length < 8)) || (lastPassArrayVal.length > 100))
                        {
                            newPassWarn.textContent = "Password length must be \"8\" min and \"100\" max";
                            isNewPassValid = false;
                        }
                        // Checks if the input fits the specified pattern
                        else if(!(lastPassArrayVal.match(userPass_Cond_SpecialChar) 
                            && lastPassArrayVal.match(userPass_Cond_Lett)
                            && lastPassArrayVal.match(userPass_Cond_num)
                        ))
                        {
                            newPassWarn.textContent = "Password must contain at least one of a letter, number, and a special character";
                            isNewPassValid = false;
                        }
                        // If all checks are completed then it is accepted
                        else
                        {
                            newPassWarn.textContent = "";
                            isNewPassValid = true;
                        }
                    }

                    newProfilePassInput.addEventListener("input" , validateNewPassword);

                // Validation for Confirm Password

                    confirmNewProfilePassInput.addEventListener("beforeinput", (event) => {
                        if(event.data != null && !(new_pass_cond).test(event.data))
                        event.preventDefault();
                    });

                    function confirmNewPass(event){
                        confPasswordArray.push(confirmNewProfilePassInput.value);
                        let lastConfPassArrayVal = confPasswordArray.at(-1);

                        if(((event.data == null) && (lastConfPassArrayVal.length <= 0)))
                        {
                            newPassConfirmWarn.textContent = "Required";
                            isConfPassValid = false;
                        }
                        else if( lastConfPassArrayVal != newProfilePassInput.value)
                        {
                            newPassConfirmWarn.textContent = "Passwords do not match";
                            isConfPassValid = false;
                        }
                        else
                        {
                            newPassConfirmWarn.textContent = "";
                            isConfPassValid = true;
                        }
                    }

                    confirmNewProfilePassInput.addEventListener("input" , confirmNewPass);

                    updateProfilePass.addEventListener("click" , () => {
                        if(!((isUserPassValid == true) && (isNewPassValid == true) && (isConfPassValid == true)))
                        {
                            alert("Please check that all fields have been filled correctly");
                            return;
                        }
                        staticUserpass = confirmNewProfilePassInput.value;
                        disableActions();
                    });



        // PREFERNCE HUB SECTION
                    
            // Open and close the sub section
                // Opens
                // Switches On
                let openPrefernce = function(opnPref){
                    preferenceBox.forEach(pBox => {
                        pBox.classList.add('hide');
                    });
                    prefSectionBdr[opnPref].classList.add('active');
                }
                opnPrefSection.forEach((btn, i) => {
                    btn.addEventListener("click" , () => {
                        openPrefernce(i)
                    });
                });

                // Closes
                clsPrefSection.forEach((btn, i) => {
                    btn.addEventListener("click" , () => {
                        preferenceBox.forEach(box => {
                            box.classList.remove('hide');
                        });
                        prefSectionBdr.forEach(box => {
                            box.classList.remove('active');
                        });
                    });
                });

            // Simulates on/off for preferences
                    
                // Switches On
                let onPrefToggle = function(onPrefTog){
                    prefInputCheckbox[onPrefTog].classList.add('active');
                    prefInputCheckboxHidden[onPrefTog].checked = true;
                }

                // Switches Off
                let offPrefToggle = function(offPrefTog){
                    prefInputCheckbox[offPrefTog].classList.remove('active');
                    prefInputCheckboxHidden[offPrefTog].checked = false;
                }

                prefInputCheckbox.forEach((btn, i) => {
                    btn.addEventListener("click" , () => {
                        if((btn.classList.contains("active")))
                        {
                            offPrefToggle(i);
                            return;
                        }
                        onPrefToggle(i);
                    });
                });


        // MEMBERSHIP SECTION
            
            // Redirects user to page
                goToMembPage.addEventListener("click" , () => {
                    window.open(URL = "../blue_Membership/Membership.html", target = "_blank");
                });



        // ADDRESS and PAYMENT METHODS (Only design for now too lazy to validate)
                
            // Switches On
            let dspAddNewForm = function(theForm){
                opnAddNewFormBdr[theForm].classList.add('hide');
                addNewFormBdr[theForm].classList.add('active');
            }

            opnAddNewFormBdr.forEach((btn, i) => {
                btn.addEventListener("click" , () => {
                    addNewFormFields.forEach(field => {
                        field.disabled = false;
                    });
                    dspAddNewForm(i)
                });
            });

            // Closes
            clsAddNewFormBdr.forEach((btn, i) => {
                btn.addEventListener("click" , () => {
                    opnAddNewFormBdr.forEach(box => {
                        box.classList.remove('hide');
                    });
                    addNewFormBdr.forEach(box => {
                        box.classList.remove('active');
                    });
                    addNewFormFields.forEach(field => {
                        field.disabled = true;
                    });
                });
            });








            
                    