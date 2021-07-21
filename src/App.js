import React,{useState} from "react"
import Icon from "./Components/Icon"

// import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import React-strap
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Container,Card, CardBody, Row,Col } from 'reactstrap';
// import Icon from "./icon"

//to make it dominating import style.css placed at last
import "./style.css"


const InputArray = new Array(9).fill("") // array having 9 spaces
const App=()=>{
            let [isCross , setIsCross] = useState(true)
            let [winMessage,setWinMessage] = useState("")

            const playAgain =()=>{
                setIsCross(true)
                setWinMessage("")
                InputArray.fill("")
            }

            const findWinner=()=>{
                if (InputArray[0]==InputArray[1]&&InputArray[0]==InputArray[2]&&InputArray[0]!=""){
                    setWinMessage(InputArray[0]+"  won the game")
                }
                else if (InputArray[3]==InputArray[4]&&InputArray[3]==InputArray[5]&&InputArray[3]!=""){
                    setWinMessage(InputArray[3]+"  won the game")
                }
                else if (InputArray[6]==InputArray[7]&&InputArray[6]==InputArray[8]&&InputArray[6]!=""){
                    setWinMessage(InputArray[6]+"  won the game")
                }

                else if (InputArray[0]==InputArray[3]&&InputArray[0]==InputArray[6]&&InputArray[0]!=""){
                    setWinMessage(InputArray[0]+"  won the game")
                }


                else if (InputArray[1]==InputArray[4]&&InputArray[1]==InputArray[7]&&InputArray[1]!=""){
                    setWinMessage(InputArray[1]+"  won the game")
                }


                else if (InputArray[2]==InputArray[5]&&InputArray[2]==InputArray[8]&&InputArray[2]!=""){
                    setWinMessage(InputArray[2]+"  won the game")
                }

                else if (InputArray[0]==InputArray[4]&&InputArray[0]==InputArray[8]&&InputArray[0]!=""){
                    setWinMessage(InputArray[0]+"  won the game")
                }

                else if (InputArray[2]==InputArray[4]&&InputArray[2]==InputArray[6]&&InputArray[2]!=""){
                    setWinMessage(InputArray[2]+"  won the game")
                }

                
            }

            const changeItem =(index)=>{
                if(winMessage){
                    return toast("Game is already over", {type:"success"})
                }
                if(InputArray[index]==""){
                    InputArray[index]= isCross ? "cross" : "circle"
                    setIsCross(!isCross)
                }
                else{
                    return toast("This place is already filled", {type:"error"})
                }
                findWinner()
            }

    return(
       <Container className="p-5">
           <ToastContainer position="bottom-center"></ToastContainer>
           <Row>
               <Col md={6} className="offset-md-3">
                {  // to display wineer message
                winMessage? (<div>
                    <h1 className="center">{winMessage}</h1>
                    <Button color="primary" onClick={playAgain}>Play again</Button>
                    </div>
                    ):(<div>
                        <h1>{isCross? "cross's turn": "circle's turn"}</h1>
                    </div>)
                }
                    

                <div className="grid">
                    {// explain map ..... a=[10,20,30]....a.map((value,index)=>console.log(value,index))
                        //output  will be    10  0 .....20  1....30  2   
                        
                       // arrow call back is used so that changeItemfunction will not execute itself
                    }
                    {InputArray.map((value,index)=>(
                        <Card onClick={()=>changeItem(index)}> 
                            <CardBody className="box">
                                <Icon choice={InputArray[index]}/>
                            </CardBody>
                        </Card>
                    )
                    )}
                </div>
               </Col>
           </Row>


       </Container>
    )

    }

export default App