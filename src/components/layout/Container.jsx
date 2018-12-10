import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles';

export default function Container(props) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100vw;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media ${device.mobile} {
      max-width: 540px;
    }
    @media ${device.tablet} {
      max-width: 720px;
    }
    @media ${device.laptop} {
      max-width: 960px;
    }
    @media ${device.desktop} {
      max-width: 1140px;
    }
  `;

  return (
    <>
      <Container>{props.children}</Container>
    </>
  );
}