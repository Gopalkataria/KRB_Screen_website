let currentVersion = null;

async function checkVersion() {
  try {
    const res = await fetch("./version.txt", { cache: "no-store" });
    const v = (await res.text()).trim();

    if (currentVersion && v !== currentVersion) {
      console.log("New version detected → reloading");
      location.reload(true);
    }

    currentVersion = v;
  } catch (err) {
    console.error("Version check failed", err);
  }
}

// check immediately + every 10 seconds
checkVersion();
setInterval(checkVersion, 10_000);
