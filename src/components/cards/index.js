import React, { useEffect } from "react";
import Image from "../../images/image.svg";
import {
  DreamsCard,
  DreamsContainer,
  DreamsDescription,
  DreamsDonations,
  DreamsH1,
  DreamsH3,
  DreamsIcon,
  DreamsObjective,
  DreamsProfile,
  DreamsSpan,
  DreamsUserImage,
  DreamsWrapper,
  DreamUsername,
} from "./style";
import { useDream } from "../../hooks/dream";
import ProgressBar from "../progressBar";
import { useHistory } from "react-router";

const DreamsCards = () => {
  const { dream, getDreams } = useDream();

  useEffect(() => {
    getDreams();
  }, [getDreams]);

  const history = useHistory();
  const navigateTo = path => () => history.push(path)
  return (
    <>
      <DreamsContainer id="dreams" >
        <DreamsH1>Alguns sonhos</DreamsH1>
        <DreamsWrapper>
          {dream.length > 0 &&
            dream.slice(0, 6).map((items, key) => (
              <DreamsCard key={key} onClick={navigateTo('/dreamssection')}>
                <DreamsIcon src={Image} />
                <DreamsH3>{items.name}</DreamsH3>
                <DreamsSpan>Id sonho: {items.id}</DreamsSpan>
                <DreamsDescription>{items.resume}</DreamsDescription>
                <DreamsProfile>
                  <DreamsUserImage src={Image}></DreamsUserImage>
                  <DreamUsername>{items.user}</DreamUsername>
                </DreamsProfile>
                <DreamsDonations>
                  <ProgressBar
                    done={((items.reached * 100) / items.goal).toFixed(2)}
                  />
                  <DreamsObjective>
                    META:
                    {items.goal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </DreamsObjective>
                </DreamsDonations>
              </DreamsCard>
            ))}
        </DreamsWrapper>
      </DreamsContainer>
    </>
  );
};

export default DreamsCards;
