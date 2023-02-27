import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
export const SignUpEmailPassword = async (email, password) => {
  let success = false;
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      success = true;
    })
    .catch((error) => {
      success = false;
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error, "error");
    });
  return success;
};
export const SignInEmailPassword = async (email, password) => {
  try {
    const result = await auth().signInWithEmailAndPassword(email, password);

    return { success: true, data: result };
  } catch (error) {
    let errMess = "something went wrong";
    console.log(error);
    // if (error.code === 'auth/email-already-in-use') {
    //   errMess = ' email address is already in use!';
    // }
    if (error.code === "auth/wrong-password") {
      errMess = " The password is invalid or click Forgot Password";
    }
    if (error.code === "auth/user-not-found") {
      errMess =
        " There is no user record corresponding to this identifier. First SignUp";
    }
    // if (error.code === 'auth/invalid-email') {
    //   errMess = ' email address is invalid!';
    // }

    return { success: false, error: errMess };
  }
  // let success = false;
  // await auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then(() => {
  //     console.log('signed in!');
  //     success = true;
  //   })

  //   .catch(error => {
  //     if (error.code === 'auth/email-already-in-use') {
  //       console.log('That email address is already in use!');
  //     }

  //     if (error.code === 'auth/invalid-email') {
  //       console.log('That email address is invalid!');
  //     }

  //     console.error(error);
  //     success = false;
  //   });
  // return success;
};
export async function SaveData(collection, doc, jsonObject) {
  // console.log(collection, doc, jsonObject);
  let success = false;
  await firestore()
    .collection(collection)
    .doc(doc)
    .set(jsonObject, { merge: true })
    .then(() => {
      success = true;
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
      success = false;
    });
  return success;
}
export const getData = async (collection, doc) => {
  try {
    const res = await firestore().collection(collection).doc(doc).get();
    if (res.exists)
      return {
        success: true,
        exists: true,
        data: res.data(),
      };
    else return { success: true, exists: false, data: null };
  } catch (error) {
    console.log("error here " + error);
    return { success: false, message: error?.message };
  }
};
