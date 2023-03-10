import { useState , useEffect } from "react";
import style from "./styles/ButtonBuyNow.module.css";
import { ReactComponent as DepositSVG } from "./assets/deposit.svg";
import classNames from "classnames";

const ButtonBuyNow = ({...props}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDeposit, setIsDeposit] = useState(false);

    useEffect(()=>{
    }, []);

    const onClickDeposit = () => {
        if(!isLoading) {
            setIsLoading(true);
            setIsDeposit(true);
            setTimeout(()=>{
                setIsLoading(false);
            }, 1000);
        }
    }
    const onRemoveDeposit = () => {
            setIsDeposit(false);
    }
    
    const onClickBuynow = () => {
        props.onClick();
    }

    return (
        <div className={classNames(style['button-component'], isDeposit?style['added']:'')}>
            <div className={classNames(style['button-deposit'], isLoading?style['loading']:'')}
                onClick={onClickDeposit}
            >
                <div className={style['deposit-svg']}>
                    <DepositSVG />
                </div>                   
                <span>
                    <svg>
                        <use xlinkHref="#circle-activate" />
                    </svg>
                    <svg>
                        <use xlinkHref="#check-activate" />
                    </svg>
                </span>
                <ul className={classNames(style[`button-text`])} >
                    <li>DEPOSIT</li>
                </ul>  
            </div>
            <div className={style['button-buynow']}
                onClick={onClickBuynow}
            >
                BUY NOW
            </div>
            <div className={classNames(style['added-deposit'])}
                onClick={onRemoveDeposit}
            >
                <div className={style['deposit-svg']}>
                    <DepositSVG />                 
                    <span>
                        <svg>
                            <use xlinkHref="#check-activate" />
                        </svg>
                    </span>
                </div>  
                <ul className={classNames(style[`button-text`])} >
                    <li>ADDED</li>
                    <li>REMOVE</li>
                </ul>  
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="circle-activate">
                    <circle cx="8" cy="8" r="7.5"></circle>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="arrow-activate">
                    <path d="M2.7008908,5.37931459 L2.7008908,5.37931459 C2.9224607,5.60207651 3.2826628,5.60304283 3.50542472,5.38147293 C3.52232305,5.36466502 3.53814843,5.34681177 3.55280728,5.32801875 L5.34805194,3.02646954 L5.34805194,10.3480519 C5.34805194,10.7081129 5.63993903,11 6,11 L6,11 C6.36006097,11 6.65194806,10.7081129 6.65194806,10.3480519 L6.65194806,3.02646954 L8.44719272,5.32801875 C8.6404327,5.57575732 8.99791646,5.61993715 9.24565503,5.42669716 C9.26444805,5.41203831 9.28230129,5.39621293 9.2991092,5.37931459 L9.2991092,5.37931459 C9.55605877,5.12098268 9.57132199,4.70855346 9.33416991,4.43193577 L6.75918715,1.42843795 C6.39972025,1.00915046 5.76841509,0.960656296 5.34912761,1.32012319 C5.31030645,1.35340566 5.27409532,1.38961679 5.24081285,1.42843795 L2.66583009,4.43193577 C2.42867801,4.70855346 2.44394123,5.12098268 2.7008908,5.37931459 Z"></path>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="check-activate">
                        <path id="test" d="M4.76499011,6.7673683 L8.2641848,3.26100386 C8.61147835,2.91299871 9.15190114,2.91299871 9.49919469,3.26100386 C9.51164115,3.27347582 9.52370806,3.28637357 9.53537662,3.29967699 C9.83511755,3.64141434 9.81891834,4.17816549 9.49919469,4.49854425 L5.18121271,8.82537365 C4.94885368,9.05820878 4.58112654,9.05820878 4.34876751,8.82537365 L2.50080531,6.97362503 C2.48835885,6.96115307 2.47629194,6.94825532 2.46462338,6.93495189 C2.16488245,6.59321455 2.18108166,6.0564634 2.50080531,5.73608464 C2.84809886,5.3880795 3.38852165,5.3880795 3.7358152,5.73608464 L4.76499011,6.7673683 Z"></path>
                </symbol>
            </svg>
        </div>
    )
}

export default ButtonBuyNow;