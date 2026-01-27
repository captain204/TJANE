
export const generateEmailHtml = (title: string, data: Record<string, string>) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: sans-serif; line-height: 1.5; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
            .header { background-color: #0c4a6e; color: white; padding: 15px; border-radius: 8px 8px 0 0; }
            .content { padding: 20px; background-color: #f9fafb; }
            .field { margin-bottom: 10px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-left: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>${title}</h2>
            </div>
            <div class="content">
              ${Object.entries(data).map(([key, value]) => `
                <div class="field">
                  <span class="label">${key}:</span>
                  <span class="value">${value}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </body>
      </html>
    `;
};
