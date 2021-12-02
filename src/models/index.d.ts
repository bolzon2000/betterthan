import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ComparisonsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comparisons {
  readonly id: string;
  readonly itemURL: string;
  readonly description: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comparisons, ComparisonsMetaData>);
  static copyOf(source: Comparisons, mutator: (draft: MutableModel<Comparisons, ComparisonsMetaData>) => MutableModel<Comparisons, ComparisonsMetaData> | void): Comparisons;
}