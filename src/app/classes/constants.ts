export const AppConfig = {
    local: 'http://atozprofile.com/',
    dev: 'http://atozprofile.com/',
    prod: 'http://atozprofile.com/'
};

export const URL = {
    addressType: 'general-address/addresstype',
    tyoeOfConnection: 'general-address/ChooseOption',
    typeOfFamily: 'general-address/genericfamily',
    typeOfFriends: 'general-address/genericfriends',
    addressDetails: 'general-address/addressList',
    countryList: 'general-address/countryList',
    docTypeList: 'general-address/documentType',
    stateList: 'general-address/{countryCode}/getStateList',
    cityList: 'general-address/{stateCode}/getCityList'
};
