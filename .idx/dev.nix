{pkgs}: {
  channel = "unstable";
  packages = [
    pkgs.nodejs_22
    pkgs.corepack_22
    pkgs.bun
  ];
  idx.extensions = [
    "vue.volar"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}