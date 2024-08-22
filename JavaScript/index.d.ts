declare namespace FastNoiseLite {
  type Vector2 = {
    x: number;
    y: number;
  }

  type Vector3 = {
    x: number;
    y: number;
    z: number;
  }

  enum NoiseType {
    OpenSimplex2 = "OpenSimplex2",
    OpenSimplex2S = "OpenSimplex2S",
    Cellular = "Cellular",
    Perlin = "Perlin",
    ValueCubic = "ValueCubic",
    Value = "Value",
  }

  enum RotationType3D {
    None = "None",
    ImproveXYPlanes = "ImproveXYPlanes",
    ImproveXZPlanes = "ImproveXZPlanes",
  }

  enum FractalType {
    None = "None",
    FBm = "FBm",
    Ridged = "Ridged",
    PingPong = "PingPong",
  }

  enum DomainWarpFractalType {
    None = "None",
    DomainWarpProgressive = "DomainWarpProgressive",
    DomainWarpIndependent = "DomainWarpIndependent",
  }

  enum CellularDistanceFunction {
    Euclidean = "Euclidean",
    EuclideanSq = "EuclideanSq",
    Manhattan = "Manhattan",
    Hybrid = "Hybrid",
  }

  enum CellularReturnType {
    CellValue = "CellValue",
    Distance = "Distance",
    Distance2 = "Distance2",
    Distance2Add = "Distance2Add",
    Distance2Sub = "Distance2Sub",
    Distance2Mul = "Distance2Mul",
    Distance2Div = "Distance2Div",
  }

  enum DomainWarpType {
    OpenSimplex2 = "OpenSimplex2",
    OpenSimplex2Reduced = "OpenSimplex2Reduced",
    BasicGrid = "BasicGrid",
  }

  enum TransformType3D {
    None = "None",
    ImproveXYPlanes = "ImproveXYPlanes",
    ImproveXZPlanes = "ImproveXZPlanes",
    DefaultOpenSimplex2 = "DefaultOpenSimplex2",
  }

  interface NoiseInstance {
    SetSeed: (seed: number) => void;
    SetFrequency: (frequency: number) => void;
    SetNoiseType: (noiseType: NoiseType) => void;
    SetRotationType3D: (rotationType: RotationType3D) => void;
    SetFractalType: (fractalType: FractalType) => void;
    SetFractalOctaves: (octaves: number) => void;
    SetFractalLacunarity: (lacunarity: number) => void;
    SetFractalGain: (gain: number) => void;
    SetFractalWeightedStrength: (weightedStrength: number) => void;
    SetFractalPingPongStrength: (pingPongStrength: number) => void;
    SetCellularDistanceFunction: (cdf: CellularDistanceFunction) => void;
    SetCellularReturnType: (crt: CellularReturnType) => void;
    SetCellularJitter: (modifier: number) => void;
    SetDomainWarpType: (dwt: DomainWarpType) => void;
    SetDomainWarpAmp: (amplitude: number) => void;
    GetNoise: (x: number, y: number, z: number) => number; //b/w -1...1
    DomainWrap: (coord: Vector2|Vector3) => void; //2D/3D warps the input position using current domain warp settings

  }
}

declare function FastNoiseLite(seed?: number): FastNoiseLite.NoiseInstance;

export = FastNoiseLite;
export as namespace FastNoiseLite;
