import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--green);
  }
  
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background: linear-gradient(145deg, #2b2b2b, #1a1a1a);
      border-radius: 1.2rem;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      border: 2px solid transparent;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%);
        z-index: 1;
        transition: opacity 0.3s ease;
      }
      
      &:hover::after {
        opacity: 0.7;
      }
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(35, 206, 107, 0.1), transparent);
        transition: left 0.5s;
      }
      
      &:hover {
        transform: translateY(-10px) scale(1.02);
        background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
        border-color: var(--green);
        box-shadow: 0 20px 40px rgba(35, 206, 107, 0.3);
        
        &::before {
          left: 100%;
        }
        
        header svg {
          transform: rotate(360deg) scale(1.1);
          stroke: var(--green);
        }
        
        .project-links a {
          transform: scale(1.1);
          filter: brightness(1.2);
        }
        
        .tech-list li {
          transform: translateY(-2px);
          opacity: 1;
        }
        
        h3 {
          color: var(--green);
        }
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        position: relative;
        z-index: 3;
        
        svg {
          transition: all 0.4s ease;
        }
        
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
          
          a {
            transition: all 0.3s ease;
            border-radius: 50%;
            padding: 0.5rem;
            
            &:hover {
              background: rgba(35, 206, 107, 0.2);
              transform: scale(1.2);
            }
          }
          
          img {
            width: 5.0rem;
            transition: all 0.3s ease;
          }
        }
      }
      
      .body {
        position: relative;
        z-index: 3;
        
        h3{
          margin-bottom: 2rem;
          transition: color 0.3s ease;
          font-size: 2.2rem;
        }

        p{
          letter-spacing: 0.12rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          
          a{
            color: #FFFF;
            border-bottom: 1px solid var(--green);
            transition: color 0.25s;
            &:hover{
              color: var(--green);
            }
          }
        }
      }

      footer{
        margin-top: auto;
        position: relative;
        z-index: 3;
        
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          flex-wrap: wrap;
          
          li {
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            background: rgba(35, 206, 107, 0.1);
            border-radius: 20px;
            border: 1px solid transparent;
            
            &:hover {
              background: rgba(35, 206, 107, 0.2);
              border-color: var(--green);
              transform: translateY(-3px);
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`