export type ForestMicroSpecimenId =
  | 'fur'
  | 'butterfly'
  | 'flower'
  | 'leaf'
  | 'wood'
  | 'mushroom'
  | 'amoeba'
  | 'bacterial'
  | 'virus'
  | 'clay'
  | 'rock';

export interface ForestMicroSpecimenSpec {
  id: ForestMicroSpecimenId;
  label: string;
  kidLabel: string;
  title: string;
  subtitle: string;
  accentHex: number;
  gladeAngleRad: number;
  gladeRadius: number;
  gladeY: number;
}

export const FOREST_MICRO_SPECIMENS: readonly ForestMicroSpecimenSpec[] = [
  {
    id: 'fur',
    label: 'Fur',
    kidLabel: 'Fur',
    title: 'Golden Capybara Fur',
    subtitle: 'Arched golden keratin bristles & imbricated cuticle scales in the moss glade',
    accentHex: 0xf59e0b,
    gladeAngleRad: -2.4,
    gladeRadius: 6.4,
    gladeY: 0.0,
  },
  {
    id: 'butterfly',
    label: 'Butterfly',
    kidLabel: 'Butterfly',
    title: 'Iridescent Forest Butterfly',
    subtitle: 'Azure morpho & monarch wings lined with photonic diffraction scales',
    accentHex: 0x38bdf8,
    gladeAngleRad: -1.75,
    gladeRadius: 6.8,
    gladeY: 2.2,
  },
  {
    id: 'flower',
    label: 'Flower',
    kidLabel: 'Flower',
    title: 'Woodland Wildflower',
    subtitle: 'Layered lavender-gold petals cradling bright pollen anthers',
    accentHex: 0xc084fc,
    gladeAngleRad: -1.1,
    gladeRadius: 6.2,
    gladeY: 0.0,
  },
  {
    id: 'leaf',
    label: 'Leaf',
    kidLabel: 'Leaf',
    title: 'Citrus & Fern Leaf',
    subtitle: 'Vascular chlorophyll venation topped with sparkling morning dew droplets',
    accentHex: 0x22c55e,
    gladeAngleRad: -0.45,
    gladeRadius: 6.5,
    gladeY: 0.25,
  },
  {
    id: 'wood',
    label: 'Wood',
    kidLabel: 'Wood',
    title: 'Mossy Oak Heartwood',
    subtitle: 'Concentric tree growth rings, xylem vascular pores & golden resin amber',
    accentHex: 0xb45309,
    gladeAngleRad: 0.25,
    gladeRadius: 7.1,
    gladeY: 0.0,
  },
  {
    id: 'mushroom',
    label: 'Mushroom',
    kidLabel: 'Mushroom',
    title: 'Crimson Toadstool Mushroom',
    subtitle: 'White-spotted red Amanita cap with delicate radial gills & moss',
    accentHex: 0xef4444,
    gladeAngleRad: 0.9,
    gladeRadius: 6.6,
    gladeY: 0.0,
  },
  {
    id: 'amoeba',
    label: 'Amoeba',
    kidLabel: 'Amoeba',
    title: 'Dew-Drop Amoeba',
    subtitle: 'Translucent pseudopod protist gliding inside a sunlit creek water droplet',
    accentHex: 0x2dd4bf,
    gladeAngleRad: 1.55,
    gladeRadius: 6.9,
    gladeY: 0.15,
  },
  {
    id: 'bacterial',
    label: 'Bacterial',
    kidLabel: 'Bacterial',
    title: 'Forest Creek Bacteria',
    subtitle: 'Glowing emerald bacilli rods & spiral bacteria propelled by flagella',
    accentHex: 0xa3e635,
    gladeAngleRad: 2.15,
    gladeRadius: 7.0,
    gladeY: 0.2,
  },
  {
    id: 'virus',
    label: 'Virus',
    kidLabel: 'Virus',
    title: 'Bacteriophage & Virion Capsid',
    subtitle: 'Geometric icosahedral capsid crystal suspended in shimmering forest mist',
    accentHex: 0xe879f9,
    gladeAngleRad: 2.75,
    gladeRadius: 6.7,
    gladeY: 1.1,
  },
  {
    id: 'clay',
    label: 'Clay',
    kidLabel: 'Clay',
    title: 'Kaolinite Riverbank Clay',
    subtitle: 'Stacked hexagonal mineral platelets glistening beside the forest stream',
    accentHex: 0xd97706,
    gladeAngleRad: -2.95,
    gladeRadius: 7.2,
    gladeY: 0.0,
  },
  {
    id: 'rock',
    label: 'Rock',
    kidLabel: 'Rock',
    title: 'Mossy Quartz Creek Rock',
    subtitle: 'Faceted woodland granite pebble studded with clear hexagonal quartz prisms',
    accentHex: 0x94a3b8,
    gladeAngleRad: -0.05,
    gladeRadius: 8.1,
    gladeY: 0.0,
  },
];

export const FOREST_MICRO_SPECIMEN_IDS: readonly ForestMicroSpecimenId[] =
  FOREST_MICRO_SPECIMENS.map((s) => s.id);

export function getForestSpecimenSpec(
  id: ForestMicroSpecimenId | string | undefined
): ForestMicroSpecimenSpec {
  const found = FOREST_MICRO_SPECIMENS.find((s) => s.id === id);
  return found ?? FOREST_MICRO_SPECIMENS[0];
}

export function pickRandomForestSpecimen(
  rng: () => number = Math.random,
  excludeId?: ForestMicroSpecimenId
): ForestMicroSpecimenId {
  const pool =
    excludeId && FOREST_MICRO_SPECIMEN_IDS.length > 1
      ? FOREST_MICRO_SPECIMEN_IDS.filter((id) => id !== excludeId)
      : FOREST_MICRO_SPECIMEN_IDS;
  const raw = rng();
  const safeRoll = Number.isFinite(raw) ? Math.min(0.999999, Math.max(0, raw)) : 0;
  const idx = Math.floor(safeRoll * pool.length);
  return pool[idx] ?? 'leaf';
}
