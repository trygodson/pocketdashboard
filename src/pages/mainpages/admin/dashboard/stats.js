import { useState } from 'react'
import { wobble, fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import StatLoader from '../../../../shared/components/skeletonloader/statloader';
import StatCard from '../../../../shared/components/statcard/StatCard';


const Stats = () => {
  const [loading, setLoading] = useState(false);
  const bounceAnimation = keyframes`${fadeIn}`;
  const _style = styled.div`
    animation: 1s ${bounceAnimation};
  `;


  return loading === true ? (
    <_style className="main__cards">
      <StatLoader />
      <StatLoader />
      <StatLoader />
      <StatLoader />
    </_style>
  ) : (
    <_style className="main__cards">
      <StatCard
        value={'23'}
        title="No of Stocks"
        icon="fi-rr-calendar"
      />
      <StatCard
        value={"787"}
        title="No of used Stocks"
        icon="fi-rr-calendar"
      />

      <StatCard
        value={"34"}
        title="No of unused Stocks"
        icon="fi-rr-document"
      />

      <StatCard
        value={"71"}
        title="No of destroyed Stocks"
        icon="fi-rr-calendar"
      />

    </_style>
  )
}

export default Stats;