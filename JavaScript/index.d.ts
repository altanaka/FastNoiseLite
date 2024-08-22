declare namespace FastNoiseLite {
  const NoiseType = {
    OpenSimplex2: "OpenSimplex2",
    OpenSimplex2S: "OpenSimplex2S",
    Cellular: "Cellular",
    Perlin: "Perlin",
    ValueCubic: "ValueCubic",
    Value: "Value",
  } as const;

  const RotationType3D = {
    None = "None",
    ImproveXYPlanes = "ImproveXYPlanes",
    ImproveXZPlanes = "ImproveXZPlanes",
  } as const;

  const FractalType = {
    None = "None",
    FBm = "FBm",
    Ridged = "Ridged",
    PingPong = "PingPong",
  } as const;

  const DomainWarpFractalType = {
    None = "None",
    DomainWarpProgressive = "DomainWarpProgressive",
    DomainWarpIndependent = "DomainWarpIndependent",
  } as const;

  const CellularDistanceFunction = {
    Euclidean = "Euclidean",
    EuclideanSq = "EuclideanSq",
    Manhattan = "Manhattan",
    Hybrid = "Hybrid",
  } as const;

  const CellularReturnType = {
    CellValue = "CellValue",
    Distance = "Distance",
    Distance2 = "Distance2",
    Distance2Add = "Distance2Add",
    Distance2Sub = "Distance2Sub",
    Distance2Mul = "Distance2Mul",
    Distance2Div = "Distance2Div",
  } as const;

  const DomainWarpType = {
    OpenSimplex2 = "OpenSimplex2",
    OpenSimplex2Reduced = "OpenSimplex2Reduced",
    BasicGrid = "BasicGrid",
  } as const;

  const TransformType3D = {
    None = "None",
    ImproveXYPlanes = "ImproveXYPlanes",
    ImproveXZPlanes = "ImproveXZPlanes",
    DefaultOpenSimplex2 = "DefaultOpenSimplex2",
  } as const;

  type Vector2 = {
    x: number;
    y: number;
  };

  type Vector3 = {
    x: number;
    y: number;
    z: number;
  };

  type ObjectValues<T> = T[keyof T];

  type NoiseType = ObjectValues<typeof NoiseType>;
  type RotationType3D = ObjectValues<typeof RotationType3D>;
  type FractalType = ObjectValues<typeof FractalType>;
  type DomainWarpFractalType = ObjectValues<typeof DomainWarpFractalType>;
  type CellularDistanceFunction = ObjectValues<typeof CellularDistanceFunction>;
  type CellularReturnType = ObjectValues<typeof CellularReturnType>;
  type DomainWarpType = ObjectValues<typeof DomainWarpType>;
  type TransformType3D = ObjectValues<typeof TransformType3D>;

  interface NoiseInstance {
    //General
    SetSeed: (seed: number) => void;
    SetFrequency: (frequency: number) => void;
    SetNoiseType: (noiseType: NoiseType) => void;
    SetRotationType3D: (rotationType: RotationType3D) => void;
    //Fractal
    SetFractalType: (fractalType: FractalType) => void;
    SetFractalOctaves: (octaves: number) => void;
    SetFractalLacunarity: (lacunarity: number) => void;
    SetFractalGain: (gain: number) => void;
    SetFractalWeightedStrength: (weightedStrength: number) => void;
    SetFractalPingPongStrength: (pingPongStrength: number) => void;
    //Cellular
    SetCellularDistanceFunction: (cdf: CellularDistanceFunction) => void;
    SetCellularReturnType: (crt: CellularReturnType) => void;
    SetCellularJitter: (modifier: number) => void;
    //Domain Warp
    SetDomainWarpType: (dwt: DomainWarpType) => void;
    SetDomainWarpAmp: (amplitude: number) => void;
    SetDomainWarpSeed: (seed: number) => void;
    SetDomainWarpFrequency: (frequency: number) => void;
    //Warp Fractal
    SetDomainWarpFractalType: (fractalType: DomainWarpFractalType) => void;
    SetDomainWarpFractalOctaves: (octaves: number) => void;
    SetDomainWarpFractalLacunarity: (lacunarity: number) => void;
    SetDomainWarpFractalGain: (gain: number) => void;
    //GetMethods
    GetNoise: (x: number, y: number, z: number) => number; //b/w -1...1
    DomainWrap: (coord: Vector2 | Vector3) => void; //2D/3D warps the input position using current domain warp settings
  }
}

declare class FastNoiseLite implements FastNoiseLite.NoiseInstance {
  constructor(seed?: number): FastNoiseLite.NoiseInstance;
  //General
  /**
   * @description Sets seed used for general noise
   * @remarks Default: 1337
   * @default 1337
   * @param {number} seed
   */
  SetSeed: (seed: number) => void;
  /**
   * @description Sets frequency for general noise
   * @remarks Default: 0.01
   * @default 0.01
   * @param {number} frequency
   */
  SetFrequency: (frequency: number) => void;
  /**
   * @description Sets noise algorithm used for GetNoise(...)
   * @remarks Default: OpenSimplex2
   * @default FastNoiseLite.NoiseType.OpenSimplex2
   * @param {FastNoiseLite.NoiseType} noiseType
   */
  SetNoiseType: (noiseType: NoiseType) => void;
  /**
   * @description Sets domain rotation type for 3D Noise and 3D DomainWarp.
   * @description Can aid in reducing directional artifacts when sampling a 2D plane in 3D
   * @remarks Default: None
   * @default FastNoiseLite.RotationType3D.None
   * @param {FastNoiseLite.RotationType3D} rotationType3D
   */
  SetRotationType3D: (rotationType: RotationType3D) => void;
  //Fractal
  /**
   * @description Sets method for combining octaves in fractal noise
   * @remarks Default: None
   * @default FastNoiseLite.FractalType.None
   * @param {FastNoiseLite.FractalType} fractalType
   */
  SetFractalType: (fractalType: FractalType) => void;
  /**
   * @description Sets octave count for fractal noise
   * @remarks Default: 3
   * @default 3
   * @param {number} octaves
   */
  SetFractalOctaves: (octaves: number) => void;
  /**
   * @description Sets octave lacunarity for fractal noise
   * @remarks Default: 2.0
   * @default 2.0
   * @param {number} lacunarity
   */
  SetFractalLacunarity: (lacunarity: number) => void;
  /**
   * @description Sets octave gain for fractal noise
   * @remarks Default: 0.5
   * @default 0.5
   * @param {number} gain
   */
  SetFractalGain: (gain: number) => void;
  /**
   * @description Sets octave weighting for all none DomainWarp fratal types
   * @remarks Default: 0.0 | Keep between 0...1 to maintain -1...1 output bounding
   * @default 0.5
   * @param {number} weightedStrength
   */
  SetFractalWeightedStrength: (weightedStrength: number) => void;
  /**
   * @description Sets strength of the fractal ping pong effect
   * @remarks Default: 2.0
   * @default 2.0
   * @param {number} pingPongStrength
   */
  SetFractalPingPongStrength: (pingPongStrength: number) => void;
  //Cellular
  /**
   * @description Sets distance function used in cellular noise calculations
   * @remarks Default: EuclideanSq
   * @default FastNoiseLite.CellularDistanceFunction.EuclideanSq
   * @param {FastNoiseLite.CellularDistanceFunction} cellularDistanceFunction
   */
  SetCellularDistanceFunction: (cdf: CellularDistanceFunction) => void;
  /**
   * @description Sets return type from cellular noise calculations
   * @remarks Default: Distance
   * @default FastNoiseLite.CellularReturnType.Distance
   * @param {FastNoiseLite.CellularReturnType} cellularReturnType
   */
  SetCellularReturnType: (crt: CellularReturnType) => void;
  /**
   * @description Sets the maximum distance a cellular point can move from it's grid position
   * @remarks Default: 1.0
   * @default 1.0
   * @param {number} cellularJitter
   */
  SetCellularJitter: (modifier: number) => void;
  //Domain Warp
  /**
   * @description Sets the warp algorithm when using DomainWarp(...)
   * @remarks Default: OpenSimplex2
   * @default FastNoiseLite.DomainWarpType.OpenSimplex2
   * @param {FastNoiseLite.DomainWarpType} domainWarpType
   */
  SetDomainWarpType: (dwt: DomainWarpType) => void;
  /**
   * @description Sets the maximum warp distance from original position when using DomainWarp(...)
   * @remarks Default: 1.0
   * @default 1.0
   * @param {number} domainWarpAmp
   */
  SetDomainWarpAmp: (amplitude: number) => void;
  /**
   * @description Sets seed used for domain warp
   * @remarks Default: 1337
   * @default 1337
   * @param {number} seed
   */
  SetDomainWarpSeed: (seed: number) => void;
  /**
   * @description Sets frequency for domain warp
   * @remarks Default: 0.01
   * @default 0.01
   * @param {number} frequency
   */
  SetDomainWarpFrequency: (frequency: number) => void;
  //Warp Fractal
  /**
   * @description Sets method for combining octaves in domain warping fractals
   * @remarks Default: None
   * @default FastNoiseLite.DomainWarpFractalType.None
   * @param {FastNoiseLite.DomainWarpFractalType} fractalType
   */
  SetDomainWarpFractalType: (fractalType: DomainWarpFractalType) => void;
  /**
   * @description Sets octave count for domain warp fractal types
   * @remarks Default: 3
   * @default 3
   * @param {number} octaves
   */
  SetDomainWarpFractalOctaves: (octaves: number) => void;
  /**
   * @description Sets octave lacunarity for domain warp fractal types
   * @remarks Default: 2.0
   * @default 2.0
   * @param {number} lacunarity
   */
  SetDomainWarpFractalLacunarity: (lacunarity: number) => void;
  /**
   * @description Sets octave gain for domain warp fractal types
   * @remarks Default: 0.5
   * @default 0.5
   * @param {number} gain
   */
  SetDomainWarpFractalGain: (gain: number) => void;
  //GetMethods
  /**
   * @description 2D/3D noise at given position using current settings
   * @param {number} x X coordinate
   * @param {number} y Y coordinate
   * @param {number} [z] Z coordinate
   * @return {number} Noise output bounded between -1...1
   */
  GetNoise: (x: number, y: number, z: number) => number;
  /**
   * @description 2D/3D warps the input position using current domain warp settings
   * @param {Vector2|Vector3} coord
   */
  DomainWrap: (coord: Vector2 | Vector3) => void;
}

export = FastNoiseLite;
export as namespace FastNoiseLite;
