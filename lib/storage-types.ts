export const STORAGE_PROVIDERS = [
  "CLOUDINARY",
  "CLOUDFLARE_R2",
  "SUPABASE"
] as const;

export type StorageProviderId = (typeof STORAGE_PROVIDERS)[number];

export type StorageProviderStatus = {
  id: StorageProviderId;
  label: string;
  configured: boolean;
  missingRequirements: string[];
  usedBytes: number;
  limitBytes: number | null;
  assetCount: number;
  note: string;
};

export type PreparedUpload =
  | {
      provider: "CLOUDINARY";
      storageKey: string;
      uploadUrl: string;
      publicUrl: null;
      fields: Record<string, string>;
    }
  | {
      provider: "CLOUDFLARE_R2";
      storageKey: string;
      uploadUrl: string;
      publicUrl: string;
      fields: null;
    }
  | {
      provider: "SUPABASE";
      storageKey: string;
      uploadUrl: null;
      publicUrl: string;
      fields: {
        token: string;
        bucket: string;
        supabaseUrl: string;
        supabaseAnonKey: string;
      };
    };
