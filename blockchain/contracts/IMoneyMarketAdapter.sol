pragma solidity 0.5.8;

/**
 * @title IMoneyMarketAdapter
 * @dev Interface used by `MetaMoneyMarket` to interact with its underlying money markets.
 */
interface IMoneyMarketAdapter {
  /**
    * @dev Returns the interest rate per block for the given token.
    */
  function getRate(address tokenAddress) external returns (uint256);
  /**
    * @dev Deposits the given amount of tokens in the underlying money market.
    */
  function deposit(address tokenAddress, uint256 amount) external;
  /**
    * @dev Withdraws the given amount of tokens from the underlying money market and transfers them to `recipient`.
    */
  function withdraw(address tokenAddress, address recipient, uint256 amount)
    external;
  /**
    * @dev Returns the supply for the given token, including accrued interest. This function can have side effects.
    */
  function getSupply(address tokenAddress) external returns (uint256);
}
