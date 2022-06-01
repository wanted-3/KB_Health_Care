export interface IRootObject {
  data: Data
  status: number
  statusText: string
  headers: Headers
  config: Config
  request: BloodPressure
}

interface Config {
  transitional: Transitional
  transformRequest: null[]
  transformResponse: null[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  env: Env
  headers: Headers2
  method: string
  url: string
}

interface Headers2 {
  Accept: string
}

interface Env {
  FormData?: any
}

interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

interface Headers {
  'accept-ranges': string
  'access-control-allow-headers': string
  'access-control-allow-methods': string
  'access-control-allow-origin': string
  'cache-control': string
  'content-encoding': string
  'content-type': string
  date: string
  etag: string
  'last-modified': string
  vary: string
  'x-powered-by': string
}

interface Data {
  userInfo: UserInfo
  wxcResultMap: WxcResultMap
  healthScoreList: HealthScoreList[]
  rtnCd: string
  healthTagList: HealthTagList[]
}

interface HealthTagList {
  tagId: string
  tag1: string
  tag2: string
  tag3: string
}

interface HealthScoreList {
  SCORE: string
  TYPE_CD: string
  SUBMIT_DATE: string
  CNTNS: string
}

export interface IWxcResultMap {
  maxHis: string
  medi_peer: stringstring
  wHage: string
  wMymaxHscoreDy: string
  mediGapSum: string
  diabmlRate: string
  ihd_peer: string
  totalRate: string
  his: string
  contribution: Contribution
  deathRate: string
  wIdealHscoreDy: string
  idealMediDy: string
  mediIncreasePercent: string
  s_contribution: Scontribution
  hscore_peer: string
  hscorePercent: string
  totalCont: TotalCont
  hdiseRate: string
  sHage: string
  paramMap: ParamMap
  wMymaxHscore: string
  topCont: TopCont
  w_contribution: Wcontribution
  ihd: string
  wHscore: string
  wHscoreDy: string
  percentList: string
  cancerRate: string
  wIdealHscore: string
  sex: number
  mediExDy: string
  idealMedi: string
  mediDy: string
  sHage_peer: string
  medi: string
  checkMap: CheckMap
  maxIhd: string
  maxSHage: string
  idealMediExDy: string
  contribution_point: Contributionpoint
  his_peer: string
  mediSum: string
  boj: Boj
  idealMediSum: string
  age: number
}

interface Boj {
  resHDLCholesterol: string
  resBMI: string
  resUrinaryProtein: string
  resBloodPressure: string
  resTotalCholesterol: string
  smkQty: string
  resFastingBloodSuger: string
  drnkQty: string
  resGFR: string
  exerciQty: string
  resLDLCholesterol: string
}

interface Contributionpoint {
  totalPoint: number
  resBMI: number
  resUrinaryProtein: number
  resTotalCholesterol: number
  resFastingBloodSuger: number
  exerciQty: number
}

interface CheckMap {
  etcdsePresc: string
  dlpdPresc: string
  fmlyCancer: string
  apopPresc: string
  dmPresc: string
  phssPresc: string
  smkQty: string
  fmlyHdise: string
  fmlyDiabml: string
  hprtsPresc: string
  fmlyApop: string
  hdisePresc: string
  drnkQty: string
  exerciQty: string
  fmlyHprts: string
}

interface Wcontribution {
  resBMI: number
  resUrinaryProtein: number
  resTotalCholesterol: number
  resFastingBloodSuger: number
  exerciQty: number
}

interface TopCont {
  topContValue: string
  topContName: string
}

interface ParamMap {
  resCheckupDate: string
  apopPresc: string
  constant: string
  resSight: string
  resSerumCreatinine: string
  resWeight: string
  phssPresc: string
  smkQty: string
  resAST: string
  resOsteoporosis: string
  resJudgement: string
  fmlyDiabml: string
  resWaist: string
  resHDLCholesterol: string
  resHemoglobin: string
  bpLwst: string
  resUrinaryProtein: string
  fmlyApop: string
  bpHigh: string
  resCheckupPlace: string
  resFastingBloodSuger: string
  drnkQty: string
  exerciQty: string
  resLDLCholesterol: string
  fmlyHprts: string
  etcdsePresc: string
  resTriglyceride: string
  dlpdPresc: string
  fmlyCancer: string
  resALT: string
  resTBChestDisease: string
  dmPresc: string
  sex: string
  checkMap: string
  fmlyHdise: string
  resBMI: string
  hprtsPresc: string
  resHearing: string
  resBloodPressure: string
  resTotalCholesterol: string
  hdisePresc: string
  resCheckupYear: string
  resHeight: string
  resGFR: string
  resyGPT: string
  age: string
}

interface TotalCont {
  resHDLCholesterol: string
  resBMI: string
  resUrinaryProtein: string
  resTotalCholesterol: string
  resFastingBloodSuger: string
  exerciQty: string
  resLDLCholesterol: string
}

interface Scontribution {
  resHDLCholesterol: number
  resBMI: number
  resFastingBloodSuger: number
  exerciQty: number
  resLDLCholesterol: number
}

interface Contribution {
  bloodPressure: BloodPressure
  medical: Medical
  bloodSugar: BloodSugar
  weight: Weight
  cholesterol: Cholesterol
  life: Life
}

interface Life {
  exerciQty: string
}

interface Cholesterol {
  resHDLCholesterol: string
  resTotalCholesterol: string
  resLDLCholesterol: string
}

interface Weight {
  resBMI: string
}

interface BloodSugar {
  resFastingBloodSuger: string
}

interface Medical {
  resUrinaryProtein: string
}

interface UserInfo {
  healthScript: string
  healthScore: string
  healthDate: string
}
