/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export declare namespace IMigrationHelper {
  export type PermitInputStruct = {
    aToken: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
    v: PromiseOrValue<BigNumberish>;
    r: PromiseOrValue<BytesLike>;
    s: PromiseOrValue<BytesLike>;
  };

  export type PermitInputStructOutput = [
    string,
    BigNumber,
    BigNumber,
    number,
    string,
    string,
  ] & {
    aToken: string;
    value: BigNumber;
    deadline: BigNumber;
    v: number;
    r: string;
    s: string;
  };
}

export interface MigrationHelperInterface extends utils.Interface {
  functions: {
    'ADDRESSES_PROVIDER()': FunctionFragment;
    'POOL()': FunctionFragment;
    'V2_POOL()': FunctionFragment;
    'aTokens(address)': FunctionFragment;
    'cacheATokens()': FunctionFragment;
    'executeOperation(address[],uint256[],uint256[],address,bytes)': FunctionFragment;
    'migrationNoBorrow(address,address[],(address,uint256,uint256,uint8,bytes32,bytes32)[])': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'ADDRESSES_PROVIDER'
      | 'POOL'
      | 'V2_POOL'
      | 'aTokens'
      | 'cacheATokens'
      | 'executeOperation'
      | 'migrationNoBorrow',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'ADDRESSES_PROVIDER',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'POOL', values?: undefined): string;
  encodeFunctionData(functionFragment: 'V2_POOL', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'aTokens',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'cacheATokens',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'executeOperation',
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'migrationNoBorrow',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      IMigrationHelper.PermitInputStruct[],
    ],
  ): string;

  decodeFunctionResult(
    functionFragment: 'ADDRESSES_PROVIDER',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'POOL', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'V2_POOL', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'aTokens', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'cacheATokens',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'executeOperation',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'migrationNoBorrow',
    data: BytesLike,
  ): Result;

  events: {};
}

export interface MigrationHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MigrationHelperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    POOL(overrides?: CallOverrides): Promise<[string]>;

    V2_POOL(overrides?: CallOverrides): Promise<[string]>;

    aTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    cacheATokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    executeOperation(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<BigNumberish>[],
      arg2: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    migrationNoBorrow(
      user: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      permits: IMigrationHelper.PermitInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  POOL(overrides?: CallOverrides): Promise<string>;

  V2_POOL(overrides?: CallOverrides): Promise<string>;

  aTokens(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<string>;

  cacheATokens(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  executeOperation(
    arg0: PromiseOrValue<string>[],
    arg1: PromiseOrValue<BigNumberish>[],
    arg2: PromiseOrValue<BigNumberish>[],
    initiator: PromiseOrValue<string>,
    params: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  migrationNoBorrow(
    user: PromiseOrValue<string>,
    assets: PromiseOrValue<string>[],
    permits: IMigrationHelper.PermitInputStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    POOL(overrides?: CallOverrides): Promise<string>;

    V2_POOL(overrides?: CallOverrides): Promise<string>;

    aTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string>;

    cacheATokens(overrides?: CallOverrides): Promise<void>;

    executeOperation(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<BigNumberish>[],
      arg2: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    migrationNoBorrow(
      user: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      permits: IMigrationHelper.PermitInputStruct[],
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    POOL(overrides?: CallOverrides): Promise<BigNumber>;

    V2_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    aTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    cacheATokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    executeOperation(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<BigNumberish>[],
      arg2: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    migrationNoBorrow(
      user: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      permits: IMigrationHelper.PermitInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    V2_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    aTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    cacheATokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    executeOperation(
      arg0: PromiseOrValue<string>[],
      arg1: PromiseOrValue<BigNumberish>[],
      arg2: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    migrationNoBorrow(
      user: PromiseOrValue<string>,
      assets: PromiseOrValue<string>[],
      permits: IMigrationHelper.PermitInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}