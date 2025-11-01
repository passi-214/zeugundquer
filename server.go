package main

import (
    "fmt"
    "log"
    "net/http"
    "os"
    "os/exec"
    "path/filepath"
    "runtime"
)

func killPort(port string) {
    if runtime.GOOS != "windows" {
        return
    }

    cmd := exec.Command("powershell", "-Command", fmt.Sprintf(`
        $p = Get-NetTCPConnection -LocalPort %s | Select-Object -ExpandProperty OwningProcess;
        if ($p) { Stop-Process -Id $p -Force }
    `, port))
    _ = cmd.Run()
}

func main() {
     killPort("8080")
    distDir := "dist" // adjust if needed

    // Check if dist exists
    if _, err := os.Stat(distDir); os.IsNotExist(err) {
        log.Fatalf("dist folder not found: %v", err)
    }

    fs := http.FileServer(http.Dir(distDir))

    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        path := filepath.Join(distDir, r.URL.Path)
        if info, err := os.Stat(path); err == nil && !info.IsDir() {
            fs.ServeHTTP(w, r)
        } else {
            http.ServeFile(w, r, filepath.Join(distDir, "index.html"))
        }
    })

    port := "8080"
    url := "http://localhost:" + port

    // Open browser automatically
    go func() {
        var cmd *exec.Cmd
        switch runtime.GOOS {
        case "windows":
            cmd = exec.Command("rundll32", "url.dll,FileProtocolHandler", url)
        case "darwin":
            cmd = exec.Command("open", url)
        default: // Linux
            cmd = exec.Command("xdg-open", url)
        }
        _ = cmd.Start()
    }()

    log.Printf("Server running at %s\n", url)
    log.Fatal(http.ListenAndServe(":"+port, nil))
}
