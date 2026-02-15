import React from 'react';

// Settings panel with various hardcoded design values
export function SettingsPanel() {
  return (
    <div style={{
      padding: '18px 22px',
      backgroundColor: '#fafafa',
      borderRadius: '14px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      border: '2px solid #d1d5db',
      maxWidth: '520px',
    }}>
      <h2 style={{
        fontSize: '22px',
        fontWeight: 700,
        color: '#111827',
        marginBottom: '16px',
        letterSpacing: '-0.02em',
      }}>
        Account Settings
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '12px',
      }}>
        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          border: '1px solid #e5e7eb',
          cursor: 'pointer',
          transition: 'all 200ms ease',
        }}>
          <input type="checkbox" defaultChecked />
          <span style={{ color: '#374151', fontSize: '14px' }}>
            Enable notifications
          </span>
        </label>

        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          border: '1px solid #e5e7eb',
          cursor: 'pointer',
          opacity: 0.6,
        }}>
          <input type="checkbox" disabled />
          <span style={{ color: '#6b7280', fontSize: '14px' }}>
            Dark mode (coming soon)
          </span>
        </label>
      </div>

      <button style={{
        marginTop: '20px',
        padding: '10px 24px',
        backgroundColor: '#3B82F6',
        color: '#ffffff',
        borderRadius: '8px',
        border: 'none',
        fontSize: '14px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background-color 150ms ease',
        zIndex: 10,
      }}>
        Save Changes
      </button>
    </div>
  );
}
