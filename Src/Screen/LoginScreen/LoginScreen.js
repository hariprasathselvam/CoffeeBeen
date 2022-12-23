import {Text, TouchableOpacity, View ,Image, ScrollView,Appearance, Alert} from 'react-native'
import {styles} from './LoginScreenStyle'
import {String} from '../../Style/Strings'
import TextBox from '../../Components/TextBox'
import PasswordTextBox from '../../Components/PasswordTextBox'
import {Images} from '../../Assets/Images/Images'
import Auth_Box from '../../Components/Auth_Box'
import CheckBox from '@react-native-community/checkbox';
import React,{useContext,useState} from 'react'
import Buttons from '../../Components/Buttons'
import { DarkMode } from './DarkMode'
import { AuthContext } from '../../Navigation/AuthProvider'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik'
import * as yup from 'yup';
const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login,register,googleLogin,fbLogin} =useContext(AuthContext)

  const [toggleCheckBox, setToggleCheckBox] =useState(false)

  const [theme,setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme);
  })

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required("Email is a required field"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
  })

  const handleSubmit = async (values) => {
    console.log(values.email);
    login(values.email,values.password)
  }

  return (
    <Formik
    validationSchema={validationSchema}
    initialValues={{ email: '', password: '' }}
    onSubmit={handleSubmit}
  >
  {({ handleChange, handleSubmit, values, errors, touched }) => (
    <ScrollView showsVerticalScrollIndicator={false} style={theme == 'light'? styles.LoginScreenContainer : DarkMode.LoginScreenContainer}>
    <View >
        <View style={styles.HeaderTextView}>
            <Text style={theme == 'light'? styles.HeaderText1 :DarkMode.HeaderText1}>{String.Coffee}</Text>
            <Text style={theme == 'light'? styles.HeaderText2 :DarkMode.HeaderText2}>{String.Been}</Text>
        </View>
      

        <View style={styles.Emailbox}>
          <TextBox
          PlaceHolder={"Enter Email"}
          TextName={String.email}
          value={values.email}
          onChangeText={handleChange('email')}
          error={touched.email && errors.email}
          />
        </View>

        <View style={styles.Passwordbox}>
          <PasswordTextBox
          PlaceHolder={"Enter Password"}
          TextName={String.Password}
          value={values.password}
          onChangeText={handleChange('password')}
          error={touched.password && errors.password}
          />
        </View>

        <View style={styles.Linking}>
          <View style={styles.ClickBox}>
            <View style={styles.ClickBox1}>
              <CheckBox
                style={styles.Click}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                <Text style={styles.Rememberme}>{String.Rememberme}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={styles.Forgetpassword}>{String.Forgetpassword}</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.CreateAccount}>
        <Buttons
        text={String.CreateAccount}
        type={"Create"}
        TextColor={"Black"}
        onpress={() => navigation.navigate('CreateAccount')}
        />
        </View>
        <View style={styles.SignIn}>
        <Buttons
        text={String.SignIn}
        onpress={handleSubmit}
        />
        </View>

        <Text style={styles.ContinueWith}>{String.ContinueWith}</Text>

        <View style={styles.OptionBox}>
          <Auth_Box Value={Images.phone} onpress={() => navigation.navigate("OTP_Verification")}/>
          <Auth_Box Value={Images.facebook} onpress={() => fbLogin()}/>
          <Auth_Box Value={Images.google} onpress={() => googleLogin()}/>
        </View>
        

      
    </View>
    </ScrollView>
  )}
    
    </Formik>
  )
}

export default LoginScreen





