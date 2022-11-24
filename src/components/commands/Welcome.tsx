import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
 __   __  _______  ___      ___      _______ 
 |  | |  ||       ||   |    |   |    |       |
 |  |_|  ||    ___||   |    |   |    |   _   |
 |       ||   |___ |   |    |   |    |  | |  |
 |       ||    ___||   |___ |   |___ |  |_|  |
 |   _   ||   |___ |       ||       ||       |
 |__| |__||_______||_______||_______||_______| 
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 _______  _______  __   __  _______  ______   ___   ______   
 |  _    ||   _   ||  | |  ||   _   ||      | |   | |    _ |  
 | |_|   ||  |_|  ||  |_|  ||  |_|  ||  _    ||   | |   | ||  
 |       ||       ||       ||       || | |   ||   | |   |_||_ 
 |  _   | |       ||       ||       || |_|   ||   | |    __  |
 | |_|   ||   _   ||   _   ||   _   ||       ||   | |   |  | |
 |_______||__| |__||__| |__||__| |__||______| |___| |___|  |_|
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Hi, I'm Bahadır Düzcan</div>
        <Seperator>----</Seperator>
        <div>Welcome to my portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
.::-===+++*+=-.              
:::---======++++*++==.            
.-------::......-++++=            
    .:--:.       =+++            
    ..=====:     .==*-            
    .=====-     -==-             
    -=====:    :--.              
    -------   .--:                
  :------   -=-                  
  .------  .-=-----:.             
  ------.  .::-------=:           
  ------          :--=+.          
  =====.            =+=           
  -====.          .=+=            
  ==++:       .-=++:             
    :=++*+=======-:               
      .:-----::.                  
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
