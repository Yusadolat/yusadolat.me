export interface StackItem {
  name: string;
  /** Filename under static/icons. */
  icon: string;
  /** Optional swatch behind the icon, for logos that need contrast. */
  background?: string;
  /** Short category label shown under the name. */
  type: string;
  /** Tooltip copy. */
  about?: string;
}

export interface StackGroup {
  title: string;
  items: StackItem[];
}
