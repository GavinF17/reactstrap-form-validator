import React, {useEffect, useState} from 'react';
import "./assets/reactivestrap.scss"
import {Routes} from "./routes/Routes";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./theme";
import {Header} from "./components/Header";

const App = () => {
  const [dark, setDark] = useState(localStorage.getItem('darkTheme') == 'true');

  useEffect(() => {
    console.log(localStorage.getItem('darkTheme'))
  });

  const toggleTheme = () => {
    const newVal = !dark;
    setDark(newVal);
    localStorage.setItem('darkTheme', String(newVal));
  };

  return (
    <>
      <Header dark={dark} toggleTheme={toggleTheme}/>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
};

export default App;

// function App() {
//   const [externalErrors, setExternalErrors] = useState({});
//   const [forename, setForename] = useState("bb");
//
//   const onValidSubmit = (values) => {
//     if (externalErrors.email) {
//       setExternalErrors({
//         forename: ['something forename'],
//         surname: ['something surname']
//       });
//     } else {
//       setExternalErrors({
//         email: ["Incorrect email format"],
//         forename: ['something forename'],
//         surname: ['something surname']
//       });
//     }
//
//     setForename("gavin")
//   };
//
//   const onInvalidSubmit = (values, errors) => console.log("onInvalidSubmit", values, errors);
//
//   return (
//     <div className="mt-5">
//       <Container>
//         <VForm
//           onValidSubmit={onValidSubmit}
//           onInvalidSubmit={onInvalidSubmit}
//           externalErrors={externalErrors}
//         >
//           <Row>
//             {/*<VFormGroup>*/}
//             {/*  <VInput name="forename" validators={{minLength: {value: 2, message: "Too damn short"}}}/>*/}
//             {/*</VFormGroup>*/}
//           </Row>
//           <Row>
//             <FormGroup>
//               <Label for="forename">Name</Label>
//               <VInputGroup>
//                 <VInput value={forename} name="forename"
//                         validators={{minLength: {value: 2, message: "Forename, Too damn short"}, pattern: {value: "^[a-z]*$"}}}/>
//                 <VInput value="" name="surname"
//                         validators={{minLength: {value: 2, message: "Surname Too damn short"}, required: true}}/>
//               </VInputGroup>
//               <VFormFeedback for={["forename", "surname"]}/>
//             </FormGroup>
//           </Row>
//           {/*<Row>*/}
//           {/*  <FormGroup>*/}
//           {/*    <InputGroup>*/}
//           {/*      <VInput value="aa" name="forename"*/}
//           {/*              validators={{minLength: {value: 2, message: "Forename, Too damn short"}}}/>*/}
//           {/*      <VInput value="aa" name="surname"*/}
//           {/*              validators={{minLength: {value: 2, message: "Surname Too damn short"}}}/>*/}
//           {/*    </InputGroup>*/}
//           {/*    <VFormFeedback for={["forename", "surname"]}/>*/}
//           {/*  </FormGroup>*/}
//           {/*</Row>*/}
//           <Row>
//             <FormGroup>
//               <Label className="is-invalid" for="email">Email</Label>
//               <VInput value="a" name="email"
//                 // validators={{minLength: {value: 2, message: "Too damn short"}}}
//               />
//               <VFormFeedback for="email"/>
//             </FormGroup>
//           </Row>
//           <FormGroup>
//             <Button>Submit</Button>
//           </FormGroup>
//         </VForm>
//         {JSON.stringify(externalErrors)}
//       </Container>
//     </div>
//   );
// }
