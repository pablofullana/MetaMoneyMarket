import React, {HTMLAttributes} from 'react';
import styled from 'styled-components';

import CardBase from '../common/card/CardBase';
import ChevronDown from '../common/img/ChevronDown';
import {Dropdown, DropdownPositions} from '../dropdown';

import {themeColors, themeDimensions} from '../../util/constants';

interface State {
  selectedToken: number;
}

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MyTotalBalanceWrapper = styled.div`
  max-width: 350px;
`;

const TokenRow = styled.div`
  align-items: center;
  display: flex;
`;

const CurrentValue = styled.div`
  color: ${themeColors.tertiaryTextColor};
  font-size: 24px;
  font-weight: normal;
  line-height: 1.2;
  margin-right: 15px;
  text-align: right;
`;

const DropdownButton = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: 10px;
  user-select: none;
`;

const DropdownButtonText = styled.span`
  color: ${themeColors.tertiaryTextColor};
  flex-grow: 1;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.2;
  margin-right: 10px;
  text-align: left;
`;

const DropdownBody = styled(CardBase)`
  width: 220px;
`;

const DropdownBodyItem = styled.div`
  color: ${themeColors.tertiaryTextColor};
  cursor: pointer;
  flex-grow: 1;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-left: -${themeDimensions.horizontalPadding};
  margin-right: -${themeDimensions.horizontalPadding};
  padding: 8px ${themeDimensions.horizontalPadding};
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Title = styled.h1`
  color: ${themeColors.baseTextColor};
  font-size: 19px;
  font-weight: 600;
  line-height: 1.35;
  margin: 0 0 25px;
`;

const tokensList = [
  {
    text: 'US Dollar',
    title: 'USD',
  },
  {
    text: 'Ethereum',
    title: 'ETH',
  },
  {
    text: 'DAI',
    title: 'DAI',
  },
];

class MyTotalBalance extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedToken: 0,
    };
  }

  public render = () => {
    const {...restProps} = this.props;

    return (
      <MyTotalBalanceWrapper title="" {...restProps}>
        <Title>Deposit Balance</Title>
        <TokenRow>
          <CurrentValue>${11111.11 * (this.state.selectedToken + 1)}</CurrentValue>
          <Dropdown
            body={this.getDropdownList()}
            header={this.getDropdownButton()}
            horizontalPosition={DropdownPositions.Center}
          />
        </TokenRow>
      </MyTotalBalanceWrapper>
    );
  };

  private getDropdownButton = (): React.ReactNode => {
    return (
      <DropdownButton>
        <DropdownButtonText>{tokensList[this.state.selectedToken].title}</DropdownButtonText>
        <ChevronDown />
      </DropdownButton>
    );
  };

  private getDropdownList = (): React.ReactNode => {
    const itemsList = tokensList.map((item, index) => {
      return (
        <DropdownBodyItem key={index} onClick={() => this.setToken(index)}>
          <strong>{item.title}</strong> - {item.text}
        </DropdownBodyItem>
      );
    });
    return <DropdownBody>{itemsList}</DropdownBody>;
  };

  private setToken = (index: number) => {
    this.setState({selectedToken: index});
  };
}

export default MyTotalBalance;
