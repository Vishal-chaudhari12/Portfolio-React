import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  padding: 2rem 0;

  h2 {
    display: inline-block;
    margin-bottom: 3rem;
    font-size: 3rem;
    color: var(--green);
    text-align: center;
    width: 100%;
  }

  .skills-section {
    margin-bottom: 4rem;

    h3 {
      font-size: 2.2rem;
      color: var(--green);
      margin-bottom: 2rem;
      text-align: center;
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--green);
      box-shadow: 0 8px 25px rgba(0, 255, 0, 0.2);
    }

    .skill-icon {
      margin-bottom: 1rem;
      
      img {
        width: 4rem;
        height: 4rem;
        object-fit: contain;
        filter: brightness(1) invert(0);
        transition: filter 0.3s ease;
      }
    }

    .skill-name {
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--white);
      text-align: center;
    }

    &:hover .skill-icon img {
      filter: brightness(1.2) invert(0);
      transform: scale(1.1);
    }
  }

  .additional-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }

  .skill-tag {
    padding: 0.8rem 1.5rem;
    background: linear-gradient(135deg, var(--green), #00ff88);
    color: var(--background);
    border-radius: 25px;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 255, 0, 0.3);
      border-color: var(--green);
    }
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1.5rem;
    }

    .skill-item {
      padding: 1rem;

      .skill-icon img {
        width: 3rem;
        height: 3rem;
      }

      .skill-name {
        font-size: 1.2rem;
      }
    }

    .skill-tag {
      font-size: 1.2rem;
      padding: 0.6rem 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .skill-item {
      padding: 0.8rem;

      .skill-icon img {
        width: 2.5rem;
        height: 2.5rem;
      }

      .skill-name {
        font-size: 1rem;
      }
    }
  }
`; 